import { ContentBox, Box, Checkbox, Button } from '../../components';
import { useState } from 'react';
import classNames from 'classnames';
import { editIcon, deleteIcon, completed } from './TodoItem.module.scss';
import { useSelector, useDispatch } from 'react-redux';


const TodoItem = ({ value }) => {
  const [checked, setChecked] = useState(false);
  
  const editClasses = classNames(editIcon, checked && completed);
  const deleteClasses = classNames(deleteIcon, checked && completed);
  
  const onTodoStatusChange = (e) => {
    setChecked(e.target.checked);
    console.log(e.target);
  };
  
  const todo = useSelector(state => state);
  const dispatch = useDispatch();
  const onTodoEdit = (e) => {
    
    console.log(e.target);
  }

  return (
    <Box active={!checked}>
      <Checkbox id={'test'} checked={checked} onChange={onTodoStatusChange} />
      <ContentBox content={value} />
      <Button type="button" shape="edit" iconClassName={editClasses} onClick={onTodoEdit}/>
      <Button type="button" shape="delete" iconClassName={deleteClasses} />
    </Box>
  );
};
export default TodoItem;
