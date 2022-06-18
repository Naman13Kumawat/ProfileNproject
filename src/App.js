import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Projects from "./pages/Projects/Projects"
import Profile from "./pages/Profile/Profile"

export default function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}
