import React from "react";
import "./App.css";
// import CounterContainer from "./containers/CounterContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
      {/* <CounterContainer /> */}
    </div>
  );
};

export default App;
