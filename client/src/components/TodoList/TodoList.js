import React, { useEffect, useState } from "react";
import Axios from "axios";

import {
  Container,
  Heading,
  TodoContainer,
  TodoTitle,
  DeleteButton,
  TodoInput,
  UpdateTodoContainer,
  EditButton,
  DoneButton,
  ButtonContainer,
} from "./TodoList.styled";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);

  const toggleEditField = () => {
    setToggleEdit(!toggleEdit);
    console.log(toggleEdit);
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((response) => {
      setTodoList(response.data);
    });
  });

  const updateTodo = (id) => {
    Axios.put("http://localhost:5000/update", { id: id, newTodo: updatedTodo });
  };

  const deleteTodo = (id) => {
    Axios.delete(`http://localhost:5000/delete/${id}`);
  };

  return (
    <Container>
      <Heading>Todo List</Heading>
      <EditButton onClick={toggleEditField} toggleEdit={toggleEdit}>
        Edit
      </EditButton>
      {todoList.map((val, key) => {
        return (
          <TodoContainer key={key}>
            <TodoTitle>{val.title}</TodoTitle>
            <UpdateTodoContainer toggleEdit={toggleEdit}>
              <TodoInput
                onChange={(e) => {
                  setUpdatedTodo(e.target.value);
                }}
              />
              <DoneButton
                onClick={() => {
                  updateTodo(val._id);
                }}
              />
            </UpdateTodoContainer>
            <ButtonContainer>
              <DeleteButton onClick={() => deleteTodo(val._id)} />
            </ButtonContainer>
          </TodoContainer>
        );
      })}
    </Container>
  );
};

export default TodoList;
