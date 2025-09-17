import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import BMI from "./components/PRO/BMI";
import Counter from "./components/PRO/Counter";
import Formval from "./components/PRO/Formval";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Pokedex from "./components/PRO/Pokedex";
import Randomjoke from "./components/PRO/Randomjoke";
import TicTac from "./components/PRO/TicTac";
import Stopwatch from "./components/PRO/Stopwatch";
import Weather from "./components/PRO/Weather";
import GitHub from "./components/PRO/GitHub";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="BMI" element={<BMI />} />
            <Route path="Counter" element={<Counter />} />
            <Route path="FormValidation" element={<Formval />} />
            <Route path="Pokedex" element={<Pokedex />} />
            <Route path="RandomJoke" element={<Randomjoke />} />
            <Route path="TicTacToe" element={<TicTac />} />
            <Route path="Stopwatch" element={<Stopwatch />} />
            <Route path="Weather" element={<Weather />} />
            <Route path="GithubUsers" element={<GitHub />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
