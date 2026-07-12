import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentRegister from "./StudentRegister";
import Home from "./Home";
import About from "./About";
import StudentLogin from "./StudentLogin";
import Services from "./Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/student-login" element={<StudentLogin />} />
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