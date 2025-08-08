import { NavLink } from "react-router-dom";
import styles from "./dashboard.module.css";
import { FaHome, FaUser, FaCog, FaLongArrowAltUp } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { path: "/admin", label: "Dashboard", icon: <FaHome /> },
    { path: "/admin/users", label: "User", icon: <FaUser /> },
    { path: "/admin/profile", label: "Profile", icon: <FaCog /> },
    { path: "/admin/logout", label: "Profile", icon: <FaLongArrowAltUp /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Admin Panel</h2>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ""}`}
            end={item.path === "/admin"}
          >
            <span className={styles.icon}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
