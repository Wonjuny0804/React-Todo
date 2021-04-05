import AddTodoButton from 'components/AddTodoButton/AddTodoButton';
import { TodoItem } from 'containers';
import Header from 'containers/Header/Header';
import { getThisWeek } from 'utils';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodoButton />
      <TodoItem />
      {/* {console.log(getThisWeek())} */}
    </div>
  );
}

export default App;
