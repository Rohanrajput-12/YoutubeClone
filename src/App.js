import React from "react";
import './index.css';
import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Watch from "./pages/Watch";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/search"  element={<Search/>}/>
        <Route path="/watch/:id"  element={<Watch/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
