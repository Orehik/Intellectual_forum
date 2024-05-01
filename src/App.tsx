import React, { Suspense } from 'react';
import {Link, Route, Routes} from "react-router-dom";
import { AboutPageAsync, MainPageAsync } from "./pages";
import "./index.scss"

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
