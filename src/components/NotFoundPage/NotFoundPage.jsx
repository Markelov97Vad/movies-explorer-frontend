import NavLinkSign from '../ui/NavLinkSign/NavLinkSign';
import './NotFoundPage.css'

function NotFoundPage() {
  return ( 
    <div className='not-found-page'>
      <div className='not-found-page__container'>
        <div className='not-found-page__wrapper'>
          <h2 className='not-found-page__title'>404</h2>
          <span className='not-found-page__subtitle'>Страница не найдена</span>
        </div>
        <NavLinkSign to='/' text='Назад' place='not-found' type='link' color='blue'/>
      </div>
    </div>
   );
}

export default NotFoundPage;