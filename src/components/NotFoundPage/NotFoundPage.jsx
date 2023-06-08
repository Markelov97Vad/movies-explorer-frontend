import NavLinkSign from '../ui/NavLinkSign/NavLinkSign';
import './NotFoundPage.css'

function NotFoundPage() {
  return ( 
    <div className='not-found-page'>
      <h2 className='not-found-page__title'>404</h2>
      <span className='not-found-page__subtitle'>Страница не найдена</span>
      <NavLinkSign to='/' text='Назад' place='not-found' type='link' color='blue'/>
    </div>
   );
}

export default NotFoundPage;