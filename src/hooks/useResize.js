import { useEffect, useState } from "react";
import { SCREEN_DESKTOP, SCREEN_MEDIUM } from "../utils/config";

function useResize() {
  const [cardsCount, setCardsCount] = useState(12);
  const [newCardsCount, setNewCardsCount] = useState(3);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      const renderCount = width > SCREEN_DESKTOP ? 12 : width > SCREEN_MEDIUM ? 8 : 5;
      const downloadCount = width > SCREEN_DESKTOP ? 3 : 2;
      console.log('NEN');
      setCardsCount(renderCount);
      setNewCardsCount(downloadCount);

      // setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { cardsCount, newCardsCount };
};

export default useResize;