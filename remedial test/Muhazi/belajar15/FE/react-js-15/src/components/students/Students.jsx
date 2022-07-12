import { useEffect, useState } from "react";
import Axios from "axios";

const CardStudents = ({ ...props }) => {
  const { name, status, perk } = props;
  return (
    <div style={{ margin: "5vh 0" }}>
      <p style={{ fontWeight: "bold" }}>Name: {name}</p>
      <p>Status: {status}</p>
      <p>Perk: {perk}</p>
    </div>
  );
};

export default function Students() {
  const [students, setStudents] = useState([]);
  const [data, setData] = useState({
    name: "",
    status: "",
    perk: "",
  });
  console.log("students state", students, data);
  useEffect(() => {
    Axios.get("http://localhost:4000/students")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const postData = async () => {
    await Axios.post("http://localhost:4000/students", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await Axios.get("http://localhost:4000/students")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch((err) => console.log(err));
    setData({
      name: "",
      status: "",
      perk: "",
    });
  };

  const changeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Students</h1>
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => changeInput(e)}
            value={data.name}
          />
        </div>
        <div>
          <label>Status</label>
          <input
            type="text"
            placeholder="status"
            name="status"
            onChange={(e) => changeInput(e)}
            value={data.status}
          />
        </div>
        <div>
          <label>Perk</label>
          <input
            type="text"
            placeholder="perk"
            name="perk"
            onChange={(e) => changeInput(e)}
            value={data.perk}
          />
        </div>
        <button onClick={postData}>Post Data</button>
      </div>
      <div>
        {students.map((item, index) => {
          return (
            <div key={index}>
              <CardStudents
                name={item.name}
                status={item.status}
                perk={item.perk}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
