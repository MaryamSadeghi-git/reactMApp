import axios from "axios";
import "../../Css/Delete.css";
import { RxCross2 } from "react-icons/rx";

export default function DeleteAPI({ render, id }) {
  async function HandleDelete() {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    render();
  }

  //   }

  return (
    <>
      <button className="delete-button" onClick={() => HandleDelete()}>
        <RxCross2 />
      </button>
    </>
  );
}
