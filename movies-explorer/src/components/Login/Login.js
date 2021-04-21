import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../Header/Header';
import { useFormWithValidation } from '../Validation/Validation';

function Login ({ onLogin, errorMessage }) {

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(formValidation.values)
    }

    const formValidation = useFormWithValidation();

    return (
        <>
            <section className="form">
                <Header disable={true} signIn={false} main={false}/>
                <form onSubmit={handleSubmit} noValidate className="form__container form__containe_type_register" name='loginForm'>
                    <h3 className="form__title">Рады видеть!</h3>
                    <label className="form__field">Email
                        <input  value={formValidation.values.email || ''} onChange={formValidation.handleChange}
                                type="email" 
                                name="email" 
                                className="form__input form__input_type_register" 
                                id="email"
                                minLength="2"
                                maxLength="40" 
                                required />
                        <span className="form__error" id="email-error">{formValidation.errors.email}</span>
                    </label>
                    <label className="form__field">Пароль
                    <input  value={formValidation.values.password || ''} onChange={formValidation.handleChange}
                            type="text" 
                            name="password" 
                            className="form__input form__input_type_password" 
                            id="password"
                            minLength="8" 
                            maxLength="20"
                            required />
                    <span className="form__error" id="password-error">{formValidation.errors.password}</span>
                    </label>
                    <span className="form__error">{errorMessage}</span>
                    <button type="submit" className={`${formValidation.isValid ? "form__button_active" : "form__button_inactive"} form__button` } disabled={`${formValidation.isValid ? "" : "disabled"}`}>Войти</button>
                </form>
                <Link to="/signup" className="form__sing-in-text"><span className="form__sing-in-text_grey">Ещё не зарегистрированы? </span>Регистрация</Link> 
            </section>
        </>
    )
}

export default Login;