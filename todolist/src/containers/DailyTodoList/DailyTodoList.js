import { TodoItem } from 'containers';
import { todoItem } from './DailyTodoList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';

const DailyTodoList = ({ className, date, todos }) => {

  const buttonRefs = {
    removeButton: useRef(null),
    eraseButton: useRef(null),
  };


  return (
    <ul className={className}>
      {
        todos?.map(({ id, content, completed }) => {
            return (
              <li key={id} className={todoItem}>
                <TodoItem 
                  date={date} 
                  id={id} 
                  completed={completed} 
                  value={content}
                />
              </li>
            );
          }) 
      }
    </ul>
  );
};

export default DailyTodoList;
