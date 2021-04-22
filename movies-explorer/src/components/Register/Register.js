import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Header from '../Header/Header';
import { useFormWithValidation } from '../Validation/Validation';

function Register ({ onRegister, errorMessage }) {

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(formValidation.values)
    }

    const formValidation = useFormWithValidation();

    return (
        <section className="form">
            <Header disable={true} signIn={false} main={false}/>
            <form onSubmit={handleSubmit} className="form__container">
                <h3 className="form__title">Добро пожаловать!</h3>
                <label className="form__field">Имя
                <input  value={formValidation.values.name || ''}
                        onChange={formValidation.handleChange}
                        type="text" 
                        name="name" 
                        className="form__input form__input_type_register" 
                        id="name" 
                        required 
                        minLength="2"
                        maxLength="40"/>
                <span className="form__error" id="email-error">{formValidation.errors.name}</span>
                </label>
                <label className="form__field">Email
                <input  value={formValidation.values.email || ''}
                        onChange={formValidation.handleChange}
                        type="email" 
                        name="email" 
                        className="form__input form__input_type_register" 
                        id="email" 
                        required 
                        minLength="2"
                        maxLength="40"/>
                <span className="form__error" id="email-error">{formValidation.errors.email}</span>
                </label>
                <label className="form__field">Пароль
                <input  value={formValidation.values.password || ''}
                        onChange={formValidation.handleChange}
                        type="text" 
                        name="password" 
                        className="form__input form__input_type_password" 
                        id="password" 
                        required 
                        minLength="2" 
                        maxLength="200"/>
                <span className="form__error" id="password-error">{formValidation.errors.password}</span>
                </label>
                <span className="form__error">{errorMessage}</span>
                <button type="submit" className={`${formValidation.isValid ? "form__button_active" : "form__button_inactive"} form__button` } disabled={`${formValidation.isValid ? "" : "disabled"}`}>Зарегистрироваться</button>
            </form>
            <Link to="/signin" className="form__sing-in-text"><span className="form__sing-in-text_grey">Уже зарегистрированы? </span>Войти</Link> 
        </section>
    )
}

export default Register;