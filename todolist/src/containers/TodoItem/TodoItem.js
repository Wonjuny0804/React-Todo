import { ContentBox, Box, Checkbox, Button } from '../../components';
import { useState } from 'react';
import classNames from 'classnames';
import { editIcon, deleteIcon, completed, todoTask } from './TodoItem.module.scss';


const TodoItem = ({ id, date, value, onEdit, onErase }) => {
  const [checked, setChecked] = useState(false);

  
  const editClasses = classNames(editIcon, checked && completed);
  const deleteClasses = classNames(deleteIcon, checked && completed);
  
  const onTodoStatusChange = (e) => {
    setChecked(e.target.checked);
    console.log(e.target);
  };

  return (
    <Box active={!checked}>
      <Checkbox id={'test'} checked={checked} onChange={onTodoStatusChange} />
      <ContentBox content={value} className={todoTask}/>
      <Button type="button" shape="edit" iconClassName={editClasses} onClick={onEdit}/>
      <Button type="button" shape="delete" iconClassName={deleteClasses} onClick={() => onErase(date, id)}/>
    </Box>
  );
};
export default TodoItem;
