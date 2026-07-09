import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentRegister from "./StudentRegister";
import Home from "./Home";
import About from "./About";
import Student from "./Student";
import Services from "./Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student" element={<Student />} />
        <Route path="/services" element={<Services />} />
         <Route 
          path="/register" 
          element={<StudentRegister />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;