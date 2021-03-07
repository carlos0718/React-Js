import './App.css';
import { NavBar } from './components/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../src/img/fotomesa-render.jpg' ;

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1> </h1>
      <div>
        <img src = {foto} className ='rounded mx-auto d-block'  alt = ''></img>
      </div>
    </div>
  );
}

export default App;
