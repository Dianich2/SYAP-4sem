import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignInForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [errorForEmail, setErrorForEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorForPassword, setErrorForPassword] = useState('')


    // ДЛЯ EMAIL
    const validateEmail = (val:string) =>{
        if(val.length == 0){
            setErrorForEmail('Поле с email должно быть обязательно заполнено')
            return 'Поле с email должно быть обязательно заполнено';
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(val)) {
            setErrorForEmail('Поле с email должно соответствовать формату example@domain.com')
            return 'Поле с email должно соответствовать формату example@domain.com';
        }
        if (/\s/.test(val)) {
            setErrorForEmail('Поле с email не должно содержать пробелы')
            return 'Поле с email не должно содержать пробелы';
        }
        setErrorForEmail('')
        return '';
    }
    const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        validateEmail(event.target.value)
        setEmail(event.target.value)
    };

    // ДЛЯ ПАРОЛЯ
    const validatePassword = (val:string) =>{
        if(val.length == 0){
            setErrorForPassword('Поле с паролем должно быть обязательно заполнено')
            return 'Поле с паролем должно быть обязательно заполнено';
        }
        if (!/[A-ZА-Я]/.test(val) || !/[a-zа-я]/.test(val) || !/[0-9]/.test(val)) {
            setErrorForPassword('Поле с паролем должно содержать как минимум одну заглавную букву, одну строчную букву и одну цифру')
            return 'Поле с паролем должно содержать как минимум одну заглавную букву, одну строчную букву и одну цифру';
        }
        if(val.length < 8){
            setErrorForPassword('Минимальная длина поля с паролем должна быть 8')
            return 'Минимальная длина поля с паролем должна быть 8';
        }
        if (/\s/.test(val)) {
            setErrorForEmail('Поле с паролем не должно содержать пробелы')
            return 'Поле с паролем не должно содержать пробелы';
        }
        setErrorForPassword('')
        return '';
    }
    const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        validatePassword(event.target.value)
        setPassword(event.target.value)
    };

        // ДЛЯ ОТПРАВКИ ФОРМЫ
        const handleSubmit = async (event:React.FormEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setErrorForEmail(emailError);
        setErrorForPassword(passwordError);

        if (!emailError && !passwordError) {
            if(check()){
                alert('Вы успешно вошли в свой аккаунт');
            }
            else{
                alert('Такого аккаунта нет. Перепроверьте email и пароль.');
            }
        }
        setEmail('');
        setPassword('');
        };

    // ДЛЯ ПРОВЕРКИ СУЩЕСТВОВАНИЯ ТАКОГО АККАУНТА
    const check = () =>{
        const masUsers = localStorage.getItem('registeredUsers');
        let buf:Array<{userName:string, userEmail:string, userPassword:string}> = [];
        const curUser = {userEmail:email, userPassword:password}
        if(masUsers != null){
            buf = JSON.parse(masUsers);
            if(buf.find(p => p.userEmail === curUser.userEmail && p.userPassword == curUser.userPassword)){
                return true;
            }
        }
        return false;
    };

  return (
    <div className="SignInForm">
<form className='border-2 border-gray-600 flex flex-col w-3xl h-11/12 p-4 items-center rounded-2xl'>

    <label className='flex flex-col mb-4 w-md text-black text-xl font-bold'>
        Email:
        <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            className={`border-2 ${errorForEmail === '' ? 'border-gray-300' : 'border-red-500'} rounded p-2 mt-1 font-normal`}
        />
        <span className='text-red-600 font-bold text-lg mb-10'>{errorForEmail}</span>
    </label>

    <label className='flex flex-col mb-4 w-md text-black text-xl font-bold'>
        Пароль:
        <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            className={`border-2 ${errorForPassword === '' ? 'border-gray-300' : 'border-red-500'} rounded p-2 mt-1 font-normal`}
        />
    </label>
    <span className='text-red-600 font-bold text-lg mb-10'>{errorForPassword}</span>

    <div className='flex flex-row w-7/12 justify-between'>
        <button type='submit' className='bg-black text-white pr-8 pl-8 rounded-md border-2 hover:bg-gray-800 hover:border-gray-400 hover:border-2' onClick={handleSubmit}>Войти</button>
        <button type='button' className='bg-white text-black p-2 rounded-md border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-800 hover:border-2' onClick={() => navigate('/sign-up')}>Зарегистрироваться</button>
        <button type='button' className='bg-white text-black p-2 rounded-md border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-800 hover:border-2' onClick={() => navigate('/reset-password')}>Забыли пароль</button>
    </div>
</form>
    </div>
  );
}

export default SignInForm;
