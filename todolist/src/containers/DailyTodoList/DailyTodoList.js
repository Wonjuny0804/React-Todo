import { TodoItem } from 'containers';
import { todoItem } from './DailyTodoList.module.scss';

const todos = [
  {
    id: 1,
    task: 'Make todo list application',
    completed: false,
  },
  {
    id: 2,
    task: 'Have fun!!!!!',
    completed: true,
  },
];

const DailyTodoList = ({ className }) => {
  return (
    <ul className={className}>
      {todos.map(({ id, task, completed }) => {
        return (
          <li key={id} completed={completed} className={todoItem}>
            <TodoItem value={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default DailyTodoList;
