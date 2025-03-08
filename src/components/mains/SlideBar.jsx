import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import "../../Css/SlideBar.css";
export default function SlideBar() {
  const [menuIcon, setMenuIcon] = useState(true);
  const signMenu = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    <>
      {/* <div className={menuIcon ? "changeWidthMain" : "NavBar-main"}> */}
      <div className={menuIcon ? "changeWidthBox" : "NavBar-left"}>
        <div
          onClick={signMenu}
          id="ShowBar"
          className={menuIcon ? "active" : "notActive"}
        >
          <IoMdMenu />
        </div>
        <div
          id="HiddenBar"
          onClick={signMenu}
          className={menuIcon ? "notActive" : "active"}
        >
          <RxCross2 />
        </div>

        <div className={menuIcon ? "hideAddElement" : "Add-menu-button"}>
          <Link to={"/Add"}>
            <button>Add A CARD</button>
          </Link>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
