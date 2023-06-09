import "./NavHeader.css";
import NavihationLink from "../../ui/NavigationLink/NavigationLink";
import NavigationLinkProfile from "../../ui/NavigationLinkProfile/NavigationLinkProfile";

function NavHeader() {
  return (
    <nav className="navigation-header">
      <ul className="navigation-header__list">
        <li>
          <NavihationLink place="header" text="Фильмы" path="/movies" />
        </li>
        <li>
          <NavihationLink
            place="header"
            text="Сохраненные фильмы"
            path="/saved-movies"
          />
        </li>
      </ul>
      <NavigationLinkProfile />
    </nav>
  );
}

export default NavHeader;
