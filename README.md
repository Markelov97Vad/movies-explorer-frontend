<h1 align="center">Дипломный проект: "Movies Explorer" (frontend)</h1>

<div align="center">
  <a href="https://marsello.diploma.nomoredomains.rocks">
    <img width="575" alt="Основной функционал приложения" src="./src/images/screen-project.gif">
  </a>
</div>

_____

<a name="project-description"><h2>1. Описание проекта</h2></a>
Дипломный проект "Movies Explorer" - приложение для поиска и просмотра фильмов международного фестиваля документального кино о новой культуре <a href="https://beatfilmfestival.ru/">"Beat Film Festival"</a>. Выполнен в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a> и представляет собой отзывчиво-адаптивное приложение (SPA), написанное на "React" (часть frontend) и "Express" (часть backend).

____

<b>Ссылки на проект:</b>

IP: 51.250.90.36

Frontend (деплой): https://marsello.diploma.nomoredomains.rocks

Backend: https://api.marsello.diploma.nomoredomains.rocks

Макет: https://www.figma.com/file/KhjjZmPqyEVbgjxeQj7EWs/Diploma-for-YP?type=design&node-id=932%3A3320&t=oV7cdh9gN2dlHcsx-1
<br>
<b>Чек-лист</b>: https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/checklist_react_diplom.pdf

<i>* - проект прошел код-ревью</i>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории, эксплуатация</a></li>
      <li><a href="#functionality">Функционал</a></li>
      <li><a href="#enhancement">Планы по улучшению</a></li>
    </ol>
  </details>
</a>

<a name="technologies"><h2>2. Стек технологий</h2></a>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

____

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории, эксплуатация</h2></a>
1. `git clone https://github.com/Markelov97Vad/movies-explorer-frontend.git` - клонировать репозиторий на свое устройство (HTTPS)
2. `npm i` - установить зависимости
3. `npm run start` - запустить приложение

<b>NB!</b> Для корректной работы в локальном репозитории следует также клонировать <a href="https://github.com/Markelov97Vad/movies-explorer-api">backend</a> и запустить в первую очередь его командой `npm run dev` (после установки зависимостей)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>4. Функционал</h2></a>
- Регистрация и авторизация пользователей с редактированием личных данных
- Поиск фильмов с фильтрацией и рандомной генерацией вывода карточек, добавлением в избранные и удалением
- Валидация личных данных
- Адаптивная верстка под все виды устройств

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="enhancement"><h2>5. Планы по улучшению</h2></a>
- Оптимизация лишних ререндеров
- Рефакторинг и "разгрузка" компонента `App`
- Кроссбраузерность
