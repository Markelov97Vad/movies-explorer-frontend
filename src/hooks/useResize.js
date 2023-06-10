import { useEffect, useState } from "react";
import { SCREEN_MEDIUM, SCREEN_MOBILE } from "../utils/config";

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width <= SCREEN_MOBILE,
    isScreenMedium: width <= SCREEN_MEDIUM,
    isScreenDesktop: width > SCREEN_MEDIUM,
  };
};

export default useResize;