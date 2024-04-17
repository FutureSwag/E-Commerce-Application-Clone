// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import CategoryPage from './components/CategoryPage';
// import CartPage from './components/CartPage';
// import CheckoutPage from './components/CheckoutPage';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/category/:categoryName" component={CategoryPage} />
//         <Route path="/cart" component={CartPage} />
//         <Route path="/checkout" component={CheckoutPage} />
//       </Switch>
//     </Router>
//   );
// }
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart">
          <CartPage cart={cart} />
        </Route>
        <Route path="/category/:categoryName" component={CategoryPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  );
}

export default App;
