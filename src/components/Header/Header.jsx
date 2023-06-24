import "./Header.css";

import { useLocation } from "react-router-dom";

import NavSign from "../navigation/NavSign/NavSign";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";
import Logo from "../ui/Logo/Logo";
import useUserContext from "../../hooks/useUserContext";

function Header() {
  const { pathname } = useLocation();
  const { loggetIn } = useUserContext();

  return (
    <header
      className={`header ${
        pathname === "/" ? "header_type_landing" : "header_type_main"
      }`}
    >
      <Logo />
      {!loggetIn ? <NavSign /> : <HeaderWrapper />}
    </header>
  );
}

export default Header;
