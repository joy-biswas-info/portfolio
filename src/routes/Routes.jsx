import { Routes, Route } from "react-router-dom";
import Users from "../admin/pages/users/Users";
import Profile from "../admin/pages/profile/Profile";
import BackendLayout from "../layout/AdminLayout";
import FrontendLayout from "../layout/ClientLayout";
import Home from "../client/pages/home/Home";
import About from "../client/pages/about/About";
import Shop from "../client/pages/shop/Shop";
import Blog from "../client/pages/blog/Blog";
import Dashboard from "../admin/dashboard/Dashboard";

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
