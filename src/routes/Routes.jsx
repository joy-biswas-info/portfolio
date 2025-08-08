import { Routes, Route } from "react-router-dom";

// import Home from "../frontend/pages/home/Home";
import Dashboard from "../backend/dashboard/Dashboard";
import Users from "../backend/pages/users/Users";
import Profile from "../backend/pages/profile/Profile";
import BackendLayout from "../layout/BackendLayout";
import FrontendLayout from "../layout/FrontendLayout";
import Home from "../frontend/pages/home/Home";
import About from "../frontend/pages/about/About";
import Shop from "../frontend/pages/shop/Shop";
import Blog from "../frontend/pages/blog/Blog";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Frontend routes */}
      <Route path="/" element={<FrontendLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
      </Route>
      {/* Backend/admin routes */}
      <Route path="/admin" element={<BackendLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
