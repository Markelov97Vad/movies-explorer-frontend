import "./NavSign.css";
import NavLinkButton from "../../ui/NavLinkButton/NavLinkButton";

function NavSign() {
  return (
    <nav className="navigation-sign">
      <ul className="navigation-sign__list">
        <li>
          <NavLinkButton
            text="Регистрация"
            place="header"
            type="link"
            link="/signup"
            color="black"
          />
        </li>
        <li>
          <NavLinkButton
            text="Войти"
            place="header"
            type="button"
            link="/signin"
            color="white"
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavSign;
