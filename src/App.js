import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import Applications from "./pages/Applications";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/recruiter"
          element={<RecruiterDashboard />}
        />
        <Route
          path="/jobseeker"
          element={<JobSeekerDashboard />}
        />
        <Route
          path="/create-job"
          element={<CreateJob />}
        />

        <Route
          path="/edit-job/:id"
          element={<EditJob />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />
        
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;