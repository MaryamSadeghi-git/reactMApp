import axios from "axios";
import "../../Css/EditAPI.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
export default function EditAPI({ props, showEdit, id }) {
  // const[toggle , settoggle] = useState(false)
  async function HandleEdit(formData) {
    await axios
      .put(`http://localhost:3000/posts/${id}`, {
        title: formData.get("title"),
        desc: formData.get("desc"),
        address: formData.get("address"),
        price: formData.get("price"),
      })
      .then((re) => console.log(re.id))
      .catch((er) => console.log(er));
    showEdit(true);
    props.render();
  }

  return (
    <div className="form-edit">
      <button className="deletebutton" onClick={() => showEdit(true)}>
        <RxCross2 />
      </button>

      <form action={HandleEdit} id="formOfAdd" autoComplete="off">
        <label>title :</label>
        <input name="title" defaultValue={props.title} />
        <label>describtion:</label>
        <input name="desc" defaultValue={props.desc} />
        <label>address:</label>
        <input name="address" defaultValue={props.address} />
        <label>price:</label>
        <input name="price" defaultValue={props.price} />

        <button type="submit" className="buttonEdit">
          send
        </button>
      </form>
    </div>
  );
}
