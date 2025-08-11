import { Outlet } from "react-router-dom";
import styles from "./adminLayout.module.css";
import Sidebar from "../admin/dashboard/Sidebar";
import Topbar from "../admin/dashboard/Topbar";

const AdminLayout = () => {
  return (
    <div className={styles.adminLayout}>
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

export default AdminLayout;
