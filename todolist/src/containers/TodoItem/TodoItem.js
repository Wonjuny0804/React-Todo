import { ContentBox, Box, Checkbox, Button } from '../../components';
import React, { useState } from 'react';
import classNames from 'classnames';
import { editIcon, deleteIcon, completed, todoTask } from './TodoItem.module.scss';


const TodoItem = ({ id, value }, ...restProps) => {
  const [checked, setChecked] = useState(false);

  
  const editClasses = classNames(editIcon, checked && completed);
  const deleteClasses = classNames(deleteIcon, checked && completed);
  
  const onTodoStatusChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Box active={!checked}>
      <Checkbox id={id} checked={checked} onChange={onTodoStatusChange} />
      <ContentBox content={value} className={todoTask}/>
      <Button type="button" shape="edit" iconClassName={editClasses} {...restProps}/>
      <Button type="button" shape="delete" iconClassName={deleteClasses} {...restProps}/>
    </Box>
  );
};

export default TodoItem;
