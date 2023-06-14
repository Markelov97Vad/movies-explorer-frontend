import { useState } from "react";
import "./HeaderWrapper.css";
import NavHeader from "../navigation/NavHeader/NavHeader";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function HeaderWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <NavHeader />
      <div className="header-wrapper">
        <button
          type="button"
          className="header-wrapper__button-burger"
          onClick={handleMenuOpen}
        ></button>
        <HeaderMenu handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
}

export default HeaderWrapper;
