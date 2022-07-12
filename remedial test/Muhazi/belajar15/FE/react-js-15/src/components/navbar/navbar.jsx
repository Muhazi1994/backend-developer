// import './navbar.css'; // import style
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href="/">
        <h1>This is a Navbar</h1>
      </a>
      <p>Link</p>
      <p>Back</p>
    </div>
  );
};

export default Navbar;
