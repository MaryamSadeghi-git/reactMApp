import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
export default function GetAPI() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getInfo();
  }, []);
  async function getInfo() {
    await axios
      .get("http://localhost:3000/posts")
      .then((res) => setData(res.data));
  }
  return (
    <>
      <Search data={data} render={getInfo} />
    </>
  );
}
