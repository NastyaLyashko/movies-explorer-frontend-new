import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../Validation/Validation';

function Profile ({ onUpdateUser, onSignOut, signIn, message }) {

    const formValidation = useFormWithValidation();
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState(currentUser.data.name  || '');

    const [email, setEmail] = React.useState(currentUser.data.email || '');

    React.useEffect(() => {
        setEmail(formValidation.values.email)
        setName(formValidation.values.name)
    }, [formValidation]); 

    const isNotEdit = formValidation.values.name === currentUser.data.name && formValidation.values.email === currentUser.data.email;

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({name, email});
    } 
    return (
        <>
            <Header  disable={false} signIn={signIn} main={false}/>
            <section className='profile'>
                <h2 className='profile__title'>Привет, {currentUser.data.name}!</h2>
                <form className='profile__form' onSubmit={handleSubmit}>
                    <div  className='profile__container'>Имя
                        <label className='profile__label'>
                            <input  className='profile__input'
                                    onChange={formValidation.handleChange}
                                    value={name}
                                    name="name" 
                                    type='text'
                                    required 
                                    minLength="2"
                                    maxLength="40"
                                    />
                            <span className="profile__error" id="name-error">{formValidation.errors.name}</span>
                        </label>
                    </div>
                    <div  className='profile__container'>E-mail
                        <label className='profile__label'>
                            <input  className='profile__input'
                                    onChange={formValidation.handleChange}
                                    value={email}
                                    name="email" 
                                    type='text'
                                    required 
                                    minLength="2"
                                    maxLength="40" />
                            <span className="profile__error" id="email-error">{formValidation.errors.email}</span>
                        </label>
                    </div>
                    <span className="profile__message">{message}</span>
                    <button type='submit' className={`${formValidation.isValid && !isNotEdit ? "profile__edit-button_active" : "profile__edit-button_inactive"} profile__edit-button` } disabled={`${formValidation.isValid ? "" : "disabled"}`}>Редактировать</button>
                </form>
                <button type='button' onClick={onSignOut} className='profile__exit-button'>Выйти из аккаунта</button>
            </section>
        </>
    )
}

export default Profile;