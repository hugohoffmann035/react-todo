import { useState } from 'react'

import styled from 'styled-components'
import { Header } from './components/Header'
import { List } from './components/List'
import { Footer } from './components/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export function Todo(){
  const [taskList, setTaskList] = useState([]) 

  function onAddNewTask(newTask){
    setTaskList(prev => [newTask, ...prev])
  }

  function onRemoveTask(idxForRemove){
    const restTasks = taskList.filter((item, idx) => idx !== idxForRemove)
    setTaskList(restTasks)
  }

  return (
    <Container>
      <Header onAddNewTask={onAddNewTask} />
      <List list={taskList} onRemoveTask={onRemoveTask} />
      <Footer />
    </Container>
  )
}