import React from "react";
import { useEffect, useState } from "react";
import Card from "../card/Card";

export default function FetchingComponent() {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, []);
  console.log("data", fetchedData);
  return (
    <div>
      <h1>Fetched Data</h1>
      {/* basicaly how to fetch */}
      {/* {fetchedData.length
        ? fetchedData.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
              </div>
            );
          })
        : "loading"} */}
      {/* <p>{fetchedData.length ? fetchedData[0].name : null}</p> */}
      {fetchedData.length
        ? fetchedData.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  name={item.name}
                  phone={item.phone}
                  website={item.website}
                />
              </div>
            );
          })
        : "loading data"}
    </div>
  );
}
