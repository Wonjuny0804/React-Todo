import { TodoItem } from 'containers';
import Header from 'containers/Header/Header';
import { getThisWeek } from 'utils';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoItem />
      {/* {console.log(getThisWeek())} */}
    </div>
  );
}

export default App;
