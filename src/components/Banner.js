import { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../resources/axios";
import request from "../resources/requestLinks";

function Banner() {
  let [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let req = await axios.get(request.noriginalsTMBD);
      setData(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    getData();
  }, []);

  function truncate(str, n){
      return str?.length > n ? str?.substr(0, n-1) +"..." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
        }}
      >
        <div className="banner_box">
          <h1 className='bttl'>{data?.title || data?.name || data?.original_name}</h1>
          <div className="btns">
                <button className="btn" type='button'>Play</button>
                <button className="btn" type='button'>My List</button>
          </div>

          <div className="desc">
              {truncate(data?.overview,150)}
          </div>
        </div>
        <div className='fadeDiv'></div>
      </header>
    </>
  );
}

export default Banner;
