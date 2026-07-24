import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";

import StudentRegister from "./pages/Student/StudentRegister";
import StudentLogin from "./pages/Student/StudentLogin";

import StudentPortal from "./pages/Portal/StudentPortal";
import Dashboard from "./pages/Portal/Dashboard";
import Profile from "./pages/Portal/Profile";
import SubmitProposal from "./pages/Portal/SubmitProposal";
import WeeklyProgress from "./pages/Portal/WeeklyProgress";
import FinalSubmission from "./pages/Portal/FinalSubmission";
import Marks from "./pages/Portal/Marks";
import Notifications from "./pages/Portal/Notifications";
// Future Pages
// import Marks from "./pages/Portal/Marks";
// import Notifications from "./pages/Portal/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Authentication */}
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />

        {/* Student Portal */}
        <Route path="/student-portal" element={<StudentPortal />}>

          {/* Default Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Student Pages */}
          <Route path="profile" element={<Profile />} />
          <Route path="proposal" element={<SubmitProposal />} />
          <Route path="weekly-progress" element={<WeeklyProgress />} />
          <Route path="final-submission" element={<FinalSubmission />} />
          <Route path="marks" element={<Marks />} />
          <Route path="notification" element={<Notifications />} />
          {/* Future Pages */}
          {/* <Route path="marks" element={<Marks />} /> */}
          {/* <Route path="notifications" element={<Notifications />} /> */}

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;