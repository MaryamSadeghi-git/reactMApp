import { useEffect, useState } from "react";
import Card from "./Card";
import "../../Css/search.css";
import { IoSearch } from "react-icons/io5";
export default function Search({ data, render }) {
  const [search, setSearch] = useState("");
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    if (search === "") {
      setDataFiltered(data);
    } else {
      setDataFiltered(
        data.filter((el) => el.desc.slice(0, search.length).includes(search))
      );
    }
  }, [search, data]);
  return (
    <>
      <div className="container-search">
        <input
          className="search-box"
          placeholder="search"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="search-icon">
          <IoSearch />
        </div>
      </div>
      <div className="container-cards">
        {dataFiltered !== undefined &&
          dataFiltered.map((info) => (
            <Card key={info.id} {...info} render={render} />
          ))}
      </div>
    </>
  );
}
