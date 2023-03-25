
import './App.css';

import {Routes} from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return ( 
    <div>
      <Header />
      <main>
        <Route path="/home">
  <Home/>
</Route>
<Route path="/products">
  <Products />
</Route>
<Routes path="/product-details/:id">
  <ProductDetails />
</Routes>
 </main>

    </div>

  );
};

export default App;
