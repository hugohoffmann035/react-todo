import styled from 'styled-components'
import { FaRegTrashAlt as TaskIconSvg } from 'react-icons/fa'

const Container = styled.div`
  margin-top: 20px;
  width: 1120px;
  max-width: 90%;
`

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TaskItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TaskCheckbox = styled.input`
  width: 25px;
  height: 25px;
`

const TaskDescription = styled.p`
  margin-left: 10px;
  color: #5A5A5A;
`

const TaskActions = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`

export function List({
  list = [],
  onRemoveTask = () => {}
}) {
  return (
    <Container>
      <TaskList>
        {list?.map((item, idx)=> (
          <TaskItem key={idx}>
            <TaskCheckbox type='checkbox' />
            <TaskDescription>{item}</TaskDescription>
            <TaskActions>
              <TaskIconSvg onClick={() => onRemoveTask(idx)} size={20} color='red' />
            </TaskActions>
          </TaskItem>
        ))}
        {list.length <= 0 && <span>Não há tarefas no momento...</span>}
      </TaskList>
    </Container>
  )
}