import Axios from "axios";
import { useState } from "react";
import { Container, Heading, Input, Button } from "./App.styled";
import "./index.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const addTodo = () => {
    Axios.post("http://localhost:5000/add", { newTodo: todo });
  };

  const [todo, setTodo] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:5000/read").then((response) => {
  //     console.log(response);
  //   });
  // });

  return (
    <div>
      <Container>
        <Heading>MERN-TODO</Heading>
        <Input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add Todo"
        />
        <Button onClick={addTodo}>Add</Button>
      </Container>
      <TodoList />
    </div>
  );
}

export default App;
