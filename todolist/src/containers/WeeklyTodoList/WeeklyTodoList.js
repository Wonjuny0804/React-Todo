import { useSelector } from 'react-redux';
import { getThisWeek } from 'utils';
import { todoListHeading, dailyTodoList } from './WeeklyTodoList.module.scss';
import { Heading } from 'components';
import { DailyTodoList } from 'containers';
// import { editTodoAction, removeTodoAction } from 'redux/storage/Todos/Todos';

const WeeklyTodoList = ({ containerClassName, ...restProps }) => {
  
  const thisWeek = getThisWeek();
  const todos = useSelector((state) => state.todo);

  const handleClick = (e) => {
    console.dir(e.target);

  }

  return (
    <ul className={containerClassName} onClick={handleClick}>
      {thisWeek.map((day) => {
        const key = day.split(' ')[0];
        return (
          <li key={key} className={dailyTodoList}>
            <Heading level={2} children={day} className={todoListHeading} />
            <DailyTodoList
              date={day}
              className={`${key}TodoList`}
              // onEdit={onTodoEdit}
              // onErase={onTodoErase}
              todos={todos[day]}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default WeeklyTodoList;
