import { useDispatch } from "react-redux";
import { useState } from "react";
import { postMovie } from "../../store/actions/movie";
import styles from "./styles/inputMovie.module.scss";

export default function InputMovie() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: "",
    picture: "",
    actors: "",
    released: "",
    budget: "",
    rating: "",
  });
  console.log("inputs", inputs);
  const changeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitMovie = () => {
    dispatch(postMovie(inputs));
  };
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Input Movie</h1>
          <div>
            <p>Title</p>
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={(e) => changeInput(e)}
            />
          </div>
          <div>
            <p>Picture</p>
            <input
              type="text"
              placeholder="picture"
              name="picture"
              onChange={(e) => changeInput(e)}
            />
          </div>
          <div>
            <p>Actors</p>
            <input
              type="text"
              placeholder="actors"
              name="actors"
              onChange={(e) => changeInput(e)}
            />
          </div>
          <div>
            <p>Released Year</p>
            <input
              type="text"
              placeholder="released"
              name="released"
              onChange={(e) => changeInput(e)}
            />
          </div>
          <div>
            <p>Budget</p>
            <input
              type="text"
              placeholder="budget"
              name="budget"
              onChange={(e) => changeInput(e)}
            />
          </div>
          <div>
            <p>Rating</p>
            <input
              type="text"
              placeholder="rating"
              name="rating"
              onChange={(e) => changeInput(e)}
            />
          </div>
          <div>
            <button onClick={submitMovie} className={styles.button}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
