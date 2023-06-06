import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Homepage from "../Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="main" element={<Main />} />
        <Route path="problem" element={<h2>компонент есть проблема</h2>} />
        <Route path="*" element={<h2>Страницы не существует</h2>} />
      </Routes>
    </div>
  );
}

export default App;
