import React from 'react';
import './App.css';
import CommonComponents from './Conponent/CommonComponents';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from './Conponent/Team';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<CommonComponents/>} />
        <Route path="/teams" element={<Team />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
