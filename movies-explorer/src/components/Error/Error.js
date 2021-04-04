import { Link } from 'react-router-dom';
import './Error.css';

function Error () {
    return (
        <section className='error'>
            <h1 className='error__title'>404</h1>
            <h2 className='error__subtitle'>Страница не найдена</h2>
            <Link className='error__link'>Назад</Link>
        </section>
    )
}

export default Error;