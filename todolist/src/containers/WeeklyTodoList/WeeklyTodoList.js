import { useSelector, useDispatch } from 'react-redux';
import { getThisWeek } from 'utils';
import { todoListHeading, dailyTodoList } from './WeeklyTodoList.module.scss';
import { Heading } from 'components';
import { DailyTodoList } from 'containers';
import { editTodoAction, removeTodoAction } from 'redux/storage/Todos/Todos';

const WeeklyTodoList = ({ containerClassName, ...restProps }) => {
  const thisWeek = getThisWeek();
  const todoState = useSelector((state) => state.todo);
  console.log(todoState);


  const _todos = useSelector(state => state);
  const dispatch = useDispatch();


  const onTodoEdit = e => {
    console.log(e.target);
  };

  const onTodoErase = (date, id) => {
    // get todo
    const todo = _todos[date].filter(todo => todo.id === id);
    dispatch(removeTodoAction(date, todo));
  }

  return (
    <ul className={containerClassName}>
      {thisWeek.map((day) => {
        const key = day.split(' ')[0];
        return (
          <li key={key} className={dailyTodoList}>
            <Heading level={2} children={day} className={todoListHeading} />
            <DailyTodoList date={day} className={`${key}TodoList`} onEdit={onTodoEdit} onErase={onTodoErase}/>
          </li>
        );
      })}
    </ul>
  );
};

export default WeeklyTodoList;
