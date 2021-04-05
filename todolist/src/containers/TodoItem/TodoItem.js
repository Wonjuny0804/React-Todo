import {
  ContentBox,
  Box, 
  Checkbox
} from '../../components'
import { useState } from 'react'
// import { todoItem } from './TodoItem.module.scss'

const TodoItem = ({ value }) => {

  const [checked, setChecked] = useState(false)

  const onTodoStatusChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <Box active={!checked}>
      <Checkbox id={'test'} checked={checked} onChange={onTodoStatusChange} />
      <ContentBox content={value} />
    </Box>
  )
}
export default TodoItem
