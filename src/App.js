import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/header/header";
import Home from "./pages/home"
import About from "./pages/about";
import Dashboard from "./pages/dashboard";

function App() {
  return (
      <Router>
        <div>
          <Header />

          <hr />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
