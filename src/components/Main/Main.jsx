import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import './Main.css'
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe.jsx';

function Main () {
  return (
    <main className='content'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  )
};

export default Main;