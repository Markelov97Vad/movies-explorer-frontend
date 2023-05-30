import './Portfolio.css';
import LinksList from '../LinkList/LinksList';

function Portfolio () {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <LinksList />
    </section>
  )
};

export default Portfolio;