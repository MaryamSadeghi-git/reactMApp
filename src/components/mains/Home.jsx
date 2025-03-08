import { Link, useSearchParams } from "react-router-dom";
import GetAPI from "./GetAPI";
import "../../Css/Home.css";
import Header from "./Header.jsx";
export default function Home() {
  return (
    <>
      <div className="container-main">
        <div className="container-slide-bar">
          <Header />
        </div>
        <div className="main-contant">
          <GetAPI />
        </div>
      </div>
    </>
  );
}
