import { TodoItem } from 'containers';
import { todoItem } from './DailyTodoList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { editTodoAction, removeTodoAction } from 'redux/storage/Todos/Todos';
import { bool } from 'prop-types'

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



const DailyTodoList = ({ className, onEdit, onErase, date }) => {
  return (
    <ul className={className}>
      {todos.map(({ id, task, completed }) => {
        return (
          <li key={id} className={todoItem}>
            <TodoItem date={date} id={id} completed={completed} value={task} onEdit={onEdit} onErase={onErase}/>
          </li>
        );
      })}
    </ul>
  );
};

export default DailyTodoList;

// DailyTodoList.propTypes = {
//   completed: bool,
// }