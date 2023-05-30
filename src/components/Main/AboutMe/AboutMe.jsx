import Headline from "../Headline/Headline";
import './AboutMe.css'
import photo from '../../../images/photo.jpg'

function AboutMe() {
  return (
    <section className='student-info'>
      <Headline title='Студент'/>
      <article className="student-info__card">
        <div className="student-info__description">
          <h3 className="student-info__title">Вадим</h3>
          <p className="student-info__subtitle">Фронтенд-разработчик, 26 лет</p>
          <p className="student-info__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. 
            У меня есть жена и дочь. Я люблю слушать музыку, 
            а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». 
            После того, как прошёл курс по веб-разработке, начал заниматься 
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="student-info__link" href="#" target="_blanck" rel='noreferrer'>Github</a>
        </div>
        <img className="student-info__image" src={photo} alt="Фото студента"/>
      </article>
    </section>
  )
}

export default AboutMe;
