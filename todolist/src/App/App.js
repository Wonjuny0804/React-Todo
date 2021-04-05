import './App.css';
import { getThisWeek } from 'utils'

function App() {
  return (
    <div className="App">
      { console.log(getThisWeek()) }
    </div>
  );
}

export default App;
