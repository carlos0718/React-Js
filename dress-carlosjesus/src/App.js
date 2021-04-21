import NavBar from "./components/nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider} from "./context/CartContext";
import Cart from "./components/Cart";
import Order from "./components/Order";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:id">
              <div>
                <ItemListContainer/>
              </div>
            </Route>
            <Route exact path="/item/:id">
              <div>
                <ItemDetailContainer />
              </div>
            </Route>
            <Route exact path = '/cart'>
              <Cart/>
            </Route>
            <Route exact path = '/order'>
              <Order/>
            </Route>
            <Route exact path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
