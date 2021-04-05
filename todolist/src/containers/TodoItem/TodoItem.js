import { ContentBox, Box, Checkbox, Button } from '../../components';
import { useState } from 'react';
import classNames from 'classnames';
import {
  todoItemContainer,
  todoTask,
  editIcon,
  deleteIcon,
  completed,
} from './TodoItem.module.scss';

const TodoItem = ({ value }) => {
  const [checked, setChecked] = useState(false);

  const editClasses = classNames(editIcon, checked && completed);
  const deleteClasses = classNames(deleteIcon, checked && completed);

  const onTodoStatusChange = (e) => {
    setChecked(e.target.checked);
  };
  const handleEditDialog = () => {};
  const handleDeleteTodo = () => {};

  return (
    <Box active={!checked} className={todoItemContainer}>
      <Checkbox id={'test'} checked={checked} onChange={onTodoStatusChange} />
      <ContentBox content={value} className={todoTask} />
      <Button
        type="button"
        shape="edit"
        iconClassName={editClasses}
        onClick={handleEditDialog}
      />
      <Button
        type="button"
        shape="delete"
        iconClassName={deleteClasses}
        onClick={handleDeleteTodo}
      />
    </Box>
  );
};
export default TodoItem;
