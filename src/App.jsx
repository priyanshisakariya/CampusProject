import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";

import StudentRegister from "./StudentRegister";
import StudentLogin from "./StudentLogin";
import StudentPortal from "./StudentPortal";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import SubmitProposal from "./SubmitProposal";
import WeeklyProgress from "./WeeklyProgress";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Navigation */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Student */}
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/student-login" element={<StudentLogin />} />
         {/* Student Portal */}
        <Route path="/student-portal" element={<StudentPortal />}>

          {/* Dashboard (Default Page) */}
          <Route index element={<Dashboard />} />

        <Route path="proposal" element={<SubmitProposal />} />
        <Route path="weekly-progress" element={<WeeklyProgress />} />
   <Route 
      path="profile" 
      element={<Profile />} 
   />

</Route>

        {/* Register Button */}
        <Route path="/register" element={<StudentRegister />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
