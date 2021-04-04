import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__container">
                <p className="footer__copyright">&copy; 2020</p>
                <ul className="footer__links">
                    <li className="footer__link">Яндекс.Практикум</li>
                    <li className="footer__link">Github</li>
                    <li className="footer__link">Facebook</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;