import NavBar  from './components/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path = '/'>
            <ItemListContainer text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit" />
          </Route>
          <Route exact path = '/category/:id'>
            <div>
              <ItemListContainer text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit" />
            </div>
          </Route>
          <Route exact path = '/item/:id'>
            <div>
              <ItemDetailContainer />
            </div>
          </Route>
          <Route exact path = '*'>
              <Error/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
