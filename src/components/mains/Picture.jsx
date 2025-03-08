import { useEffect } from "react";
import gol from "../../assets/gol.jpg";
import rang from "../../assets/rang.jpg";
import sun from "../../assets/sun.jpg";
import fruit from "../../assets/fruit.jpg";
import "../../Css/Picture.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Picture() {
  const savePic = [rang, gol, sun, fruit];
  const [passPic, setPassPic] = useState(Math.floor(Math.random() * 4));
  function plusPictures() {
    {
      passPic >= savePic.length - 1 ? setPassPic(0) : setPassPic(passPic + 1);
    }
  }
  function minesPictures() {
    {
      passPic <= 0 ? setPassPic(savePic.length - 1) : setPassPic(passPic - 1);
    }
  }

  return (
    <>
      <img src={savePic[passPic]} className="pic-of-struct" />
      <button className="card-button left" onClick={() => plusPictures()}>
        <FaChevronLeft />
      </button>
      <button className="card-button right" onClick={() => minesPictures()}>
        <FaChevronRight />
      </button>
      <div className="dot-picture-change"></div>
    </>
  );
}
