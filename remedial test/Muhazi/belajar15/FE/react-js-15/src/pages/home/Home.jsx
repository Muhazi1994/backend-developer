import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/movie";
import { useHistory, Link } from "react-router-dom";
import CardMovie from "./components/CardMovie";
import "./styles/home.sass";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, movies } = useSelector((state) => state.movie); // take items from reducers
  console.log("movies list", movies);
  useEffect(() => {
    dispatch(getMovies()); // trigger saga to get data from server
  }, []);

  const history = useHistory();

  const calculate = (a, b) => {
    history.push("/input-movie");
    return a + b;
  };
  return (
    <div>
      <Link to="/input-movie">
        <h1>Welcome to my site</h1>
      </Link>
      <button onClick={() => calculate(1, 2)}>Calculate</button>
      <h3>
        <a href="/input-movie">Post Movie</a>
      </h3>
      <div className="container">
        {loading
          ? "wait a minute"
          : movies.map((item, index) => {
              return (
                <div key={index}>
                  <CardMovie
                    id={item.id}
                    title={item.title}
                    picture={item.picture}
                  />
                  <p>{item.id}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
