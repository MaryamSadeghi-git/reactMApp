import axios from "axios";
import "../../Css/EditAPI.css";
import { useState } from "react";
export default function EditAPI({ props, render, showEdit }) {
  // const[toggle , settoggle] = useState(false)
  async function HandleEdit(formData) {
    await axios
      .put(`http://localhost:3000/posts/${props.id}`, {
        title: formData.get("title"),
        desc: formData.get("desc"),
        address: formData.get("address"),
        price: formData.get("price"),
      })
      .catch((er) => console.log(er));
    showEdit(true);
    render();
  }

  return (
    <div className="form-edit">
      <form action={HandleEdit} id="formOfAdd" autoComplete="off">
        <label>title :</label>
        <input name="title" defaultValue={props.title} />
        <label>describtion:</label>
        <input name="desc" defaultValue={props.desc} />
        <label>address:</label>
        <input name="address" defaultValue={props.address} />
        <label>price:</label>
        <input name="price" defaultValue={props.price} />
        <br />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
