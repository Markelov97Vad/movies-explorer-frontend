import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import './Main.css'
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavAuth from '../../navigation/NavAuth/NavAuth';

function Main () {
  return (
    <>
      <Header>
        {/* <NavAuth/> */}
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
};

export default Main;