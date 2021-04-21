import { useHistory  } from 'react-router-dom';
import './NotFound.css';

function NotFound () {

    const history = useHistory(); 

    return (
        <section className='error'>
            <h1 className='error__title'>404</h1>
            <h2 className='error__subtitle'>Страница не найдена</h2>
            <button className='error__button' onClick={() => history.goBack()}>Назад</button>
        </section>
    )
}

export default NotFound;