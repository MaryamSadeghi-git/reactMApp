import { Link, useSearchParams } from "react-router-dom";
import GetAPI from "./GetAPI";
import "../../Css/Home.css";
import SlideBar from "./SlideBar.jsx";
export default function Home() {
  return (
    <>
      <SlideBar />
      <div className="container-main">
        <div className="cards-contant">
          <GetAPI />
        </div>
      </div>
    </>
  );
}
