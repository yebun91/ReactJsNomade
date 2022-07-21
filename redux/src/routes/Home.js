import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDo from "../components/ToDo";
// import { addToDo } from "../store";
// import { actionCreators } from "../store";
import { add } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  }

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
