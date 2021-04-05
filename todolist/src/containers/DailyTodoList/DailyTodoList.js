import { TodoItem } from 'containers';
import { todoItem } from './DailyTodoList.module.scss';


const DailyTodoList = ({ className, onEdit, onErase, date, todos }) => {


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
