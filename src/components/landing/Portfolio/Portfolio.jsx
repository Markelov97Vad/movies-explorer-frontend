import './Portfolio.css';
import PortfolioLinksList from '../PortfolioLinksList/PortfolioLinksList';

function Portfolio () {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <PortfolioLinksList />
    </section>
  )
};

export default Portfolio;