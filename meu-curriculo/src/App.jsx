import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Projects } from "./pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
