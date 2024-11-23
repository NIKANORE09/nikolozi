import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";
import AddToCart from "./components/AddToCart";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <Header count={count} />
      <div className="right1111">

      <Main />
      <AddToCart setCount={setCount} />
      </div>
    </div>
  );
};

export default App;
