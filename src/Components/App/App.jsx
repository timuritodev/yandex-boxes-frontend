import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
        <Route path="/" element={<h2>стартовый компонент</h2>} />
        <Route path="main" element={<h2>компонент основной</h2>} />
        <Route path="problem" element={<h2>компонент есть проблема</h2>} />
        <Route path="*" element={<h2>Страницы не существует</h2>} />
      </Routes>
    </div>
  );
}

export default App;
