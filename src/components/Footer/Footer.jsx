import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__content-wrapper'>
        <span className='footer__copyright'>&copy; {new Date().getFullYear()}</span>
        <nav className='footer__links'>
          <ul className='footer__list'>
            <li><a href="https://practicum.yandex.ru/" className='footer__link' target='_blank' rel="noreferrer">Яндекс.Практикум</a></li>
            <li><a href="https://github.com/Markelov97Vad" className='footer__link' target='_blank' rel="noreferrer">Github</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;