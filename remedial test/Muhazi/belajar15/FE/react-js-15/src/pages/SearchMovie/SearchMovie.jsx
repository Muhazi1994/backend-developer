import { useState } from "react";
import axios from "axios";

export default function SearchMovie() {
  const [listMovie, setListMovie] = useState([]);
  console.log(listMovie);
  const MovieSearch = (keyword) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=e877dd87&s=${keyword}`)
      .then((res) => setListMovie(res.data));
  };
  return (
    <div>
      <h1>Search Movie</h1>
      <input
        placeholder="search"
        onChange={(e) => MovieSearch(e.target.value)}
      />
      <div>
        <h1>Search Result</h1>
        {listMovie?.Search?.length
          ? listMovie?.Search?.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item?.Poster} alt={item?.Title} />
                  <p>{item?.Title}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
