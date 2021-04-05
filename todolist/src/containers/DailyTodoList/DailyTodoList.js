import { TodoItem } from 'containers';
import { todoItem } from './DailyTodoList.module.scss';
import { useSelector } from 'react-redux';


const DailyTodoList = ({ className, onEdit, onErase, date, todos }) => {

  // const dailyTodo = useSelector(state => state[date]);


  return (
    <ul className={className}>
      {
        todos?.map(({ id, content, completed }) => {
            return (
              <li key={id} className={todoItem}>
                <TodoItem date={date} id={id} completed={completed} value={content} onEdit={onEdit} onErase={onErase}/>
              </li>
            );
          }) 
      }
    </ul>
  );
};

export default DailyTodoList;
