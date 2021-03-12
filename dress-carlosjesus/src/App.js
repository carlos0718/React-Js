import './App.css';
import { NavBar } from './components/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './components/listContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <ListContainer text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit"/>
      </div>
    </div>
  );
}

export default App;
