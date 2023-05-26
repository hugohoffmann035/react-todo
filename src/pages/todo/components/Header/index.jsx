import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.header`
  margin-top: 40px;
  width: 1120px;
  max-width: 90%;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 15px;
  border: none;
  background: #f3f3f3;
  border-radius: 8px;

  margin-top: 10px;
`;

export function Header({ onAddNewTask = () => {} }) {
  const [newTask, setNewTask] = useState("");

  function onCleanInputTask(){
    setNewTask('')
  }

  function handleSubmit(e) {
    e.preventDefault(0);

    onAddNewTask(newTask)

    onCleanInputTask()
  }

  return (
    <Container>
      <h1>Todas as tarefas</h1>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Adicionar uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>
    </Container>
  );
}
