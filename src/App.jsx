import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Checkout, Confirmation, Details, Home } from "./Pages";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Fragment>
  );
}

export default App;
