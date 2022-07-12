import Navbar from "./components/navbar/navbar"; // import component
import "./App.css";
import styles from "./App.module.css";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      {/* <div className="container" style={{ color: "red" }}> */}
      <Navbar />
      <div className={styles.container}>
        <Routes />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
