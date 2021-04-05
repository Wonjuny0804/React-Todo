import AddTodoButton from 'components/AddTodoButton/AddTodoButton';
import { TodoItem } from 'containers';
import Header from 'containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodoButton />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
