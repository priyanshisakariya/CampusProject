import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Student";
import Home from "./Home";
function App() {
  return (
    <>
    <Home />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;