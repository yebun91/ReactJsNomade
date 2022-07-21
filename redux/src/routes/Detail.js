import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { actionCreators } from "../store";
import { remove } from "../store";

const Detail = () => {
  const toDos = useSelector((state) => state);
  const sendId = useParams().id;
  const dispatch = useDispatch();

  const toDoText = toDos.find((toDo) => toDo.id === parseInt(sendId));
  console.log(toDoText);

  const onClick = () => {
    dispatch(remove(toDoText?.id));
  };

  return (
    <>
      {toDoText?.text}
      <br />
      Created at : {toDoText?.id}
      <button onClick={onClick}>DEL</button>
    </>
  );
};

export default Detail;
