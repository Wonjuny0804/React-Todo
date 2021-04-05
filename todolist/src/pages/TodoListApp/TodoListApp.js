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

const TodoListApp = () => {
  const handleOpenDialogButton = () => {};

  return (
    <div className={todoContainer}>
      <Heading level={1} children="Todo List" className={heading} />
      <p className={text}>This Week</p>
      <Button
        content="Add a task"
        onClick={handleOpenDialogButton}
        className={addBtn}
        title="plus icon"
        shape="plus"
        iconClassName={plusIcon}
      />
      <WeeklyTodoList containerClassName={weeklyTodoList} />
    </div>
  );
};

export default TodoListApp;
