import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
function SignUpForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [errorForName, setErrorForName] = useState('')
    const [email, setEmail] = useState('')
    const [errorForEmail, setErrorForEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorForPassword, setErrorForPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [errorForRepeatPassword, setErrorForRepeatPassword] = useState('')


    // ДЛЯ ИМЕНИ
    const validateName = (val: string) => {
        if(val.length == 0){
            setErrorForName('Поле с именем должно быть обязательно заполнено')
            return 'Поле с именем должно быть обязательно заполнено';
        }
        if(val.length < 2){
            setErrorForName('Минимальная длина имени должна быть 2')
            return 'Минимальная длина имени должна быть 2';
        }
        if(val.length > 50){
            setErrorForName('Максимальная длина имени должна быть 50')
            return 'Максимальная длина имени должна быть 50';
        }
        const nam = /^([A-ZА-Яa-zа-я]*)$/;
        if(!nam.test(val)){
            setErrorForName('В поле с именем могут быть только буквы русского и английского алфавитов')
            return 'В поле с именем могут быть только буквы русского и английского алфавитов';
        }
        setErrorForName('')
        return '';
    };
    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        validateName(event.target.value)
        setName(event.target.value)
    };


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


      // ДЛЯ ПОВТОРА ПАРОЛЯ
      const validateRepeatPassword = (val:string) =>{
        if(val.length == 0){
            setErrorForRepeatPassword('Поле с подтверждением пароля должно быть обязательно заполнено')
            return 'Поле с подтверждением пароля должно быть обязательно заполнено';
        }

        if(password != val) {
            setErrorForRepeatPassword('Пароли не совпадают')
            return 'Пароли не совпадают';
        }
        setErrorForRepeatPassword('')
        return '';
    }
    const handleRepeatPasswordChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        validateRepeatPassword(event.target.value)
        setRepeatPassword(event.target.value)
    };

    // ДЛЯ ОТПРАВКИ ФОРМЫ
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const repeatPasswordError = validateRepeatPassword(repeatPassword);

        setErrorForName(nameError);
        setErrorForEmail(emailError);
        setErrorForPassword(passwordError);
        setErrorForRepeatPassword(repeatPasswordError);

        if (!nameError && !emailError && !passwordError && !repeatPasswordError) {
            if(checkExists()){
                alert('Регистрация прошла успешно.');
                navigate('/sign-in');
            }
            else{
                alert('Аккаунт с таким email уже существует.');
            }
        }
        setName('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
    };

    //ДЛЯ ПРОВЕРКИ НА СУЩЕСТВОВАНИЕ И В СЛУЧАЕ НЕ СУЩЕСТВОВАНИЯ ДЛЯ ДОБАВЛЕНИЕ
    const checkExists = () =>{
        const masUsers = localStorage.getItem('registeredUsers');
        let buf:Array<{userName:string, userEmail:string, userPassword:string}> = [];
        const curUser = {userName:name, userEmail:email, userPassword:password}
        if(masUsers != null){
            buf = JSON.parse(masUsers);
            if(buf.find(p => p.userEmail === curUser.userEmail)){
                return false;
            }
        }
        buf.push(curUser);
        localStorage.setItem('registeredUsers', JSON.stringify(buf))
        return true;
    };

  return (
    <div className="SignUpForm">
<form className='border-2 border-gray-600 flex flex-col w-3xl h-fit p-4 items-center rounded-2xl' onSubmit={handleSubmit}>
    <label className='flex flex-col mb-4 w-md text-black text-xl font-bold'>
        Имя:
        <input
            type='text'
            value={name}
            onChange={handleNameChange}
            className={`border-2 ${errorForName === '' ? 'border-gray-300' : 'border-red-500'} rounded p-2 mt-1 font-normal`}
        />
        <span className='text-red-600 font-bold text-lg mb-10'>{errorForName}</span>
    </label>

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

    <label className='flex flex-col mb-4 w-md text-black text-xl font-bold'>
        Подтверждение пароля:
        <input
            type='password'
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            className={`border-2 ${errorForRepeatPassword === '' ? 'border-gray-300' : 'border-red-500'} rounded p-2 mt-1 font-normal`}
        />
        <span className='text-red-600 font-bold text-lg mb-10'>{errorForRepeatPassword}</span>
    </label>
    <div className='flex flex-row w-7/12 justify-between'>
        <button type='submit' className='bg-black text-white p-2 rounded-md border-2 hover:bg-gray-800 hover:border-gray-400 hover:border-2'>Зарегистрироваться</button>
        <Link to='/sign-in'>Авторизоваться</Link>
        <button type='button' className='bg-white text-black p-2 rounded-md border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-800 hover:border-2' onClick={() => navigate('/sign-in')}>Авторизоваться</button>
    </div>
    </form>
    </div>
  );
}

export default SignUpForm;