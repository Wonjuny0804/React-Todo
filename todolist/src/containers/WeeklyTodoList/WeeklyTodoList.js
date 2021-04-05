import { useSelector, useDispatch } from 'react-redux';
import { getThisWeek } from 'utils';
import { todoListHeading, dailyTodoList } from './WeeklyTodoList.module.scss';
import { Heading } from 'components';
import { DailyTodoList } from 'containers';

const WeeklyTodoList = ({ ...restProps }) => {
  const thisWeek = getThisWeek();
  const todoState = useSelector((state) => state.todo);
  console.log(todoState);

  return (
    <ul>
      {thisWeek.map((day) => {
        const key = day.split(' ')[0];
        return (
          <li key={key} className={dailyTodoList}>
            <Heading level={2} children={day} className={todoListHeading} />
            <DailyTodoList className={`${key}TodoList`} />
          </li>
        );
      })}
    </ul>
  );
};

export default WeeklyTodoList;
