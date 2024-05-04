import React, { Suspense } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync, MainPageAsync } from "./pages";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss"

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
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
