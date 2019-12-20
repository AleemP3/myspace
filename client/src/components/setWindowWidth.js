import { useState, useEffect, } from "react";

export const useWindowWidth = () => {

  const [ width, setWidth ] = useState(window.innerWidth);
  
  useEffect( () => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return() => {
      window.removeEventListener("Resize", handleResize);
    };
  });
  return width; 
}