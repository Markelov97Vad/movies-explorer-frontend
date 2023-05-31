import { linksList } from '../../../utils/config';
import './LinksList.css'


function LinksList() {
  return (
    <ul className='portfolio-projects'>
      {linksList.map((el) => (
        <li key={el.id} className='portfolio-projects__list'>
          <a href={el.link} className='portfolio-projects__link'>
            <span className='portfolio-projects__text'>{el.text}</span>
            <span className='portfolio-projects__icon'>&#8599;</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default LinksList;