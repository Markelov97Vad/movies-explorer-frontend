import { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import NavSign from "../navigation/NavSign/NavSign";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";
import { LoggetContext } from "../contexts/loggetContext";
import Logo from "../ui/Logo/Logo";

function Header() {
  const { pathname } = useLocation();
  const isLoggetIn = useContext(LoggetContext);

  return (
    <header
      className={`header ${
        pathname === "/" ? "header_type_landing" : "header_type_main"
      }`}
    >
      <Logo />
      {!isLoggetIn ? <NavSign /> : <HeaderWrapper />}
    </header>
  );
}

export default Header;
