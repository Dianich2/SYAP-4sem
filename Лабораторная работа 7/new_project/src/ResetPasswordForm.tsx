import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
function ResetPasswordForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [errorForEmail, setErrorForEmail] = useState('')


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

        // ДЛЯ ОТПРАВКИ ФОРМЫ
        const handleSubmit = async (event:React.FormEvent<HTMLButtonElement>) =>{
            event.preventDefault();
            const emailError = validateEmail(email);

            setErrorForEmail(emailError);

            if (!emailError) {
                if (check()) {
                    const newPassword = generatePassword();
                    alert(`Аккаунт будет восстановлен. Новый пароль: ${newPassword}`); 
                    
                    const masUsers = localStorage.getItem('registeredUsers');
                    let buf: Array<{ userName: string; userEmail: string; userPassword: string }> = [];
                    if (masUsers) {
                        buf = JSON.parse(masUsers);
                        const curUser = { userEmail: email };
                        const foundUser = buf.find(p => p.userEmail === curUser.userEmail);
                        
                        if (foundUser) {
                            foundUser.userPassword = newPassword;
                            localStorage.setItem('registeredUsers', JSON.stringify(buf));
                        }
                    }
                    navigate('/sign-in');
                }
                else{
                    alert('Такого аккаунта нет. Перепроверьте email.');
                }
            }
            setEmail('');
        };

        const generatePassword = () =>{
            const lowerCase = 'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
            const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
            const numbers = '0123456789';
            const all = lowerCase + upperCase + numbers;
            const len = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
            let newPassword:string = lowerCase[Math.floor(Math.random() * lowerCase.length)] + upperCase[Math.floor(Math.random() * upperCase.length)] + numbers[Math.floor(Math.random() * numbers.length)];
            for(let i = 0; i < len; i++){
                newPassword += all[Math.floor(Math.random() * all.length)];
            }
            return newPassword;
        }

           // ДЛЯ ПРОВЕРКИ СУЩЕСТВОВАНИЯ ТАКОГО АККАУНТА И ЗАДАНИЯ НОВОГО ПАРОЛЯ
    const check = () =>{
        const masUsers = localStorage.getItem('registeredUsers');
        let buf:Array<{userName:string, userEmail:string, userPassword:string}> = [];
        const curUser = {userEmail:email}
        if(masUsers != null){
            buf = JSON.parse(masUsers);
            if(buf.find(p => p.userEmail === curUser.userEmail)){
                return true;
            }
        }
        return false;
    };

  return (
    <div className="ResetPasswordForm">
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

    <div className='flex flex-row w-7/12 justify-between'>
        <button type='submit' className='bg-black text-white pr-8 pl-8 rounded-md border-2 hover:bg-gray-800 hover:border-gray-400 hover:border-2' onClick={handleSubmit}>Восстановить</button>
        <button type='button' className='bg-white text-black p-2 rounded-md border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-800 hover:border-2' onClick={() => navigate('/sign-in')}>Назад</button>
    </div>
</form>
    </div>
  );
}

export default ResetPasswordForm;
