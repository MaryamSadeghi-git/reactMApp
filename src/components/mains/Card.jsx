import DeleteAPI from "./DeleteAPI";
import EditAPI from "./EditAPI";
import "../../Css/Card.css";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Picture from "./Picture";

export default function Card(props) {
  const [toggle, setToggle] = useState(true);
  const [passId, setPassId] = useState([]);

  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <DeleteAPI id={props.id} render={props.render} />
          <button
            className="edit-button"
            onClick={() => {
              toggle && setToggle(false), setPassId(props.id);
            }}
          >
            <FaEdit />
          </button>
          <div className="containerof-pic">
            <Picture />
          </div>
        </div>
        <div className="card-footer ">
          <p className="paragraf">{props.title} </p>
          <p className="paragraf">{props.desc} </p>
          <p className="paragraf">{props.address}</p>
          <p className="paragraf">{props.price} </p>
        </div>
      </div>
      {toggle !== true && (
        <EditAPI id={passId} props={props} showEdit={setToggle} />
      )}
    </>
  );
}
