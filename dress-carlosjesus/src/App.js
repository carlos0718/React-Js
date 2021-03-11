import './App.css';
import { NavBar } from './components/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './components/listContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <ListContainer/>
      </div>
    </div>
  );
}

export default App;
