import { Outlet } from "react-router-dom";

import styles from "./backendLayout.module.css";
import Sidebar from "../backend/dashboard/Sidebar";
import Topbar from "../backend/dashboard/Topbar";

const BackendLayout = () => {
  return (
    <div className={styles.backendLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.pageContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BackendLayout;
