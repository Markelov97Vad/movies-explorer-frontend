import './PortfolioLinksList.css';
import { linksList } from '../../../utils/config';
import PortfolioLink from '../PortfolioLink/PortfolioLink';


function PortfolioLinksList() {
  return (
    <ul className='portfolio-projects'>
      {linksList.map((link) => (
        <li key={link.id} className='portfolio-projects__list'>
          <PortfolioLink link={link} />
        </li>
      ))}
    </ul>
  )
}

export default PortfolioLinksList;