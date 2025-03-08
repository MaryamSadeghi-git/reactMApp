import DeleteAPI from "./DeleteAPI";
import EditAPI from "./EditAPI";
import "../../Css/Card.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Card(props) {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <div className="card-pictuer">
            <br />
            <DeleteAPI id={props.id} render={props.render} />
            <img src="" />
            <button className="card-button left">
              <FaChevronLeft />
            </button>
            <button className="card-button right">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-information">
            <form id="formOfCard" autoComplete="off">
              <input value={props.title} />
              <input value={props.desc} />
              <input value={props.address} />
              <input value={props.price} />
            </form>
          </div>
          <button
            className="edit-button"
            onClick={() => {
              toggle && setToggle(false);
            }}
          >
            edit
          </button>
        </div>
      </div>
      {toggle !== true && (
        <EditAPI props={props} render={props.render} showEdit={setToggle} />
      )}
    </>
  );
}
