import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetail } from "../../store/actions/movie";
import { useParams } from "react-router-dom";
import "./styles/details.scss";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);
  const { details, loading } = useSelector((state) => state.movie.detailMovie);
  console.log(details);
  return (
    <div className="details-container">
      <h1>Detail Movie</h1>
      {loading ? (
        "loading..."
      ) : (
        <div>
          <img
            src={details.picture}
            alt={details.title}
            style={{ width: "500px" }}
          />
          <h2>{details.title}</h2>
          <p>Released Year: {details.released_year}</p>
          <p>Budget: {details.budget}</p>
          <p>Rating: {details.rating}</p>
          <ul>
            {details?.actors?.length
              ? details.actors.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })
              : details?.actors}
          </ul>
        </div>
      )}
    </div>
  );
}
