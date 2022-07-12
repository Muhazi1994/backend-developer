import { useState } from "react";

export default function InputHandle() {
  const [profile, setProfile] = useState({});
  const [show, setShow] = useState(false);
  const onChangeInput = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  console.log("profile", profile);
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="input your name"
          name="name"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          placeholder="input your age"
          name="age"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="input your city"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div>
        <label>Address</label>
        <textarea
          name="address"
          placeholder="input your address"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "unprint" : "print"}
        </button>
      </div>
      {show ? (
        <div>
          <p>{profile.name}</p>
          <p>{profile.age}</p>
          <p>{profile.city}</p>
          <p>{profile.address}</p>
        </div>
      ) : null}
    </div>
  );
}
