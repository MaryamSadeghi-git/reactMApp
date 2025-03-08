import axios from "axios";
import { useState } from "react";
import "../../Css/AddAPI.css";
import { Link, Navigate } from "react-router-dom";
import { BiCaretRightSquare } from "react-icons/bi";
export default function AddAPI() {
  const [navigate, setNavigate] = useState(false);

  async function handleChange(formData) {
    document.querySelector("#formOfAdd").reset();
    await axios
      .post(`http://localhost:3000/posts`, {
        title: formData.get("title"),
        desc: formData.get("desc"),
        address: formData.get("address"),
        price: formData.get("price"),
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setNavigate(true);
  }

  return (
    <>
      <div className="form-Add-main">
        <form
          action={handleChange}
          className="form-Add"
          id="formOfAdd"
          autoComplete="off"
        >
          <label>
            title :<input type="text" name="title" required />
          </label>

          <label>
            describtion:
            <input type="text" name="desc" required />
          </label>

          <label>
            address:
            <input type="text" name="address" required />
          </label>

          <label>
            price:
            <input name="price" type="number" required />
          </label>

          <button className="addbtn" type="submit">
            send
            {navigate && <Navigate to={"/"} />}
          </button>
        </form>
      </div>
    </>
  );
}
