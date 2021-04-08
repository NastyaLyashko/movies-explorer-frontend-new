import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile ({ userName, email }) {
    return (
        <>
            <Header  disable={false} signIn={true} main={false}/>
            <section className='profile'>
                <h2 className='profile__title'>Привет, {userName}!</h2>
                <form className='profile__form'>
                    <div  className='profile__container'>
                        <label className='profile__label'>Имя</label>
                        <input  className='profile__input'
                                value={userName}
                                type='text' />
                        
                    </div>
                    <div  className='profile__container'>
                        <label className='profile__label'>E-mail</label>
                        <input  className='profile__input'
                                value={email}
                                type='text' />
                        
                    </div>
                </form>
                <button  className='profile__edit-button'>Редактировать</button>
                <Link to='/' className='profile__exit-button'>Выйти из аккаунта</Link>
            </section>
        </>
    )
}

export default Profile;