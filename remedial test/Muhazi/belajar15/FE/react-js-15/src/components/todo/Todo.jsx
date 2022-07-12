import { useEffect, useState } from "react";
import axios from "axios";

export default function Todo() {
  const [todos, setTodos] = useState({
    task: "",
    isCompleted: false,
  });
  console.log(todos);

  const [listTodo, setListTodo] = useState([]);
  const [selected, setSelected] = useState(false);
  console.log(listTodo);
  useEffect(() => {
    axios.get("http://localhost:4000/todo").then((res) => {
      console.log(res);
      setListTodo(res.data);
    });
  }, []);

  const postTodo = async () => {
    await axios
      .post("http://localhost:4000/todo", todos)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await axios.get("http://localhost:4000/todo").then((res) => {
      console.log(res);
      setListTodo(res.data);
      setTodos({ task: "", isCompleted: false });
      setSelected(true);
      setTimeout(() => {
        setSelected(false);
      }, 500);
    });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`http://localhost:4000/todo/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await axios.get("http://localhost:4000/todo").then((res) => {
      console.log(res);
      setListTodo(res.data);
    });
  };

  const changeTodo = async (item) => {
    await axios
      .put(`http://localhost:4000/todo/${item.id}`, {
        id: item.id,
        task: item.task,
        isCompleted: !item.isCompleted,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await axios.get("http://localhost:4000/todo").then((res) => {
      console.log(res);
      setListTodo(res.data);
    });
  };

  return (
    <div>
      <input
        value={todos.task}
        placeholder="task"
        onChange={(e) => setTodos({ ...todos, task: e.target.value })}
      />
      <select
        onChange={(e) =>
          setTodos({ ...todos, isCompleted: Boolean(e.target.value) })
        }
      >
        <option value={false} selected={selected}>
          False
        </option>
        <option value={true}>True</option>
      </select>
      <button onClick={postTodo}>Post</button>
      <div>
        {listTodo.map((item, index) => {
          return (
            <div key={index}>
              <p style={{ fontWeight: "bold" }}>{item.task}</p>
              <p>status: {item.isCompleted ? "completed" : "not completed"}</p>
              <button onClick={() => changeTodo(item)}>
                {!item.isCompleted ? "completed" : "not completed"}
              </button>
              <button onClick={() => deleteTodo(item.id)}>DELETE!</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
