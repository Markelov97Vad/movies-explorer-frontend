import { useState } from "react";
import "./NavMain.css";
import NavHeader from "../navigation/NavHeader/NavHeader";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function NavMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <NavHeader />
      <div className="navigation-main__wrapper">
        <button
          type="button"
          className="navigation-main__button-burger"
          onClick={handleMenuOpen}
        ></button>
        <HeaderMenu handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
}

export default NavMain;
