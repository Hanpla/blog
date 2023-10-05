import "./appRouter.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../routes/home/Home";
import Topbar from "../topbar/Topbar";
import Register from "../../routes/register/Register";
import Login from "../../routes/login/Login";
import Write from "../../routes/write/Write";
import Settings from "../../routes/settings/Settings";
import Single from "../../routes/single/Single";

const AppRouter = () => {
  const user = false;

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
