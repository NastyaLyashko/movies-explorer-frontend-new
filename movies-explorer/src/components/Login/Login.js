import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../Header/Header';

function Login ({ email, password }) {
    return (
        <>
            <section className="form">
                <Header disable={true} signIn={true} main={false}/>
                <form className="form__container form__containe_type_register">
                    <h3 className="form__title">Рады видеть!</h3>
                    <label className="form__field">Email
                    <input  value={email}
                            type="email" 
                            name="email" 
                            className="form__input form__input_type_register" 
                            id="email" 
                            required 
                            minLength="2"
                            maxLength="40"/>
                    <span className="form__error" id="email-error"></span>
                    </label>
                    <label className="form__field">Пароль
                    <input  value={password}
                            type="text" 
                            name="password" 
                            className="form__input form__input_type_password" 
                            id="password" 
                            required 
                            minLength="2" 
                            maxLength="200"/>
                    <span className="form__error" id="password-error"></span>
                    </label>
                </form>
                <Link to="/signin" className="form__button">Войти</Link>
                <Link to="/signup" className="form__sing-in-text"><span className="form__sing-in-text_grey">Ещё не зарегистрированы? </span>Регистрация</Link> 
            </section>
        </>
    )
}

export default Login;