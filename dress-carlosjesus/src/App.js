import './App.css';
import NavBar  from './components/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <ItemListContainer text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit"/>
      </div>
      <div>
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
