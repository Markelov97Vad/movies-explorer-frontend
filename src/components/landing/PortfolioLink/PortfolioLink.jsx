import './PortfolioLink.css';

function PortfolioLink({ link }) {
  return ( 
    <a href={link.link} className='portfolio-link' target='_blank' rel="noreferrer">
      <span className='portfolio-link__text'>{link.text}</span>
      <span className='portfolio-link__icon'>&#8599;</span>
    </a>
);
}

export default PortfolioLink;