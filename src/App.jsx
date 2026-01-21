import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import HomePage from "./pages/Home";
import WinePage from './pages/Wine';
import CoffeePage from './pages/Coffee';
import ErrorPage from './pages/error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wine" element={<WinePage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
