import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Anime } from "./components/Pages/Anime";
import { Community } from "./components/Pages/Community";
import { Recommendations} from "./components/Pages/Recommendations";
import { Login } from "./components/Pages/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Anime />} />
            <Route path="/Recommendations " element={<Recommendations />} />
            <Route path="/community" element={<Community/>}/>
            <Route path="/Login" element={<Login/>} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
