import iconsText from '../../../utils/config';
import Headline from '../Headline/Headline';
import './Techs.css';

function Techs() {
  return (
    <section className='techs-info'>
      <Headline title='Технологии'/>
        <article className='techs-info__card'>
          <h3 className='techs-info__title'>7 технологий</h3>
          <p className='techs-info__subtitle'>
            На курсе веб-разработки мы освоили технологии, 
            которые применили в дипломном проекте.
          </p>
            <ul className='techs-info__list'>
              {
                iconsText.map((el, i) => (
                  <li key={i} className='techs-info__icon'>{el}</li>
                ))
              }
            </ul>
        </article>
    </section>
  )
};

export default Techs;
