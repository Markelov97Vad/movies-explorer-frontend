import "./NavMenu.css";
import NavigationLink from "../../ui/NavigationLink/NavigationLink";

function NavMenu() {
  return (
      <nav className="navigation-menu">
        <ul className="navigation-menu__list">
          <li>
            <NavigationLink place="menu" text="Главная" path="/"/>
          </li>
          <li>
            <NavigationLink place="menu" text="Фильмы" path="/movies" />
          </li>
          <li>
            <NavigationLink place="menu" text="Сохранённые фильмы" path="/saved-movies"/>
          </li>
        </ul>
      </nav>
  );
}

export default NavMenu;
