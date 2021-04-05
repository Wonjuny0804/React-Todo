import AddTodoButton from 'components/AddTodoButton/AddTodoButton';
import { TodoItem, WeeklyTodoList } from 'containers';
import Header from 'containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <WeeklyTodoList />
    </div>
  );
}

export default App;
