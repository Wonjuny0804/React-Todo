import { useState } from 'react';
import { Button, Heading } from 'components';
import { WeeklyTodoList } from 'containers';
import {
  todoContainer,
  heading,
  text,
  addBtn,
  plusIcon,
  weeklyTodoList,
} from './TodoListApp.module.scss';
import ModalDialog from 'containers/ModalDialog/ModalDialog';

const TodoListApp = () => {
  const [isDialogShow, setIsDialogShow] = useState(false);

  const showDialog = () => {
    setIsDialogShow(true);
  };

  return (
    <div className={todoContainer}>
      <Heading level={1} children="Todo List" className={heading} />
      <p className={text}>This Week</p>
      <Button
        content="Add a task"
        onClick={showDialog}
        className={addBtn}
        title="plus icon"
        shape="plus"
        iconClassName={plusIcon}
      />
      {isDialogShow && <ModalDialog />}
      <WeeklyTodoList containerClassName={weeklyTodoList} />
    </div>
  );
};

export default TodoListApp;
