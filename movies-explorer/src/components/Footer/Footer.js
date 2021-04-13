import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__container">
                <p className="footer__copyright">&copy; 2020</p>
                <div className="footer__links">
                    <a href='https://praktikum.yandex.ru' className="footer__link">Яндекс.Практикум</a>
                    <a href='https://github.com' className="footer__link">Github</a>
                    <a href='https://www.facebook.com' className="footer__link">Facebook</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;