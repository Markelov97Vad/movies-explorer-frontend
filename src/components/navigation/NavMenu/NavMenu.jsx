import "./NavMenu.css";
import NavigationLinkProfile from "../../ui/NavigationLinkProfile/NavigationLinkProfile";
import NavigationLink from "../../ui/NavigationLink/NavigationLink";
import ButtonCross from "../../ui/ButtonCross/ButtonCross";

function NavMenu({ handleMenuOpen }) {
  return (
    <nav className="navigation-menu">
      <ButtonCross place='menu' onClick={handleMenuOpen}/>
      <ul className="navigation-menu__list">
        <li>
          <NavigationLink place="menu" text="Главная" path="/" />
        </li>
        <li>
          <NavigationLink place="menu" text="Фильмы" path="/movies" />
        </li>
        <li>
          <NavigationLink place="menu" text="Сохранённые фильмы" path="/saved-movies"/>
        </li>
      </ul>
      <NavigationLinkProfile place="menu" />
    </nav>
  );
}

export default NavMenu;
