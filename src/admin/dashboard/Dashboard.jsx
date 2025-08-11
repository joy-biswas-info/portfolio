// import { useState } from "react";
// import styles from "./dashboard.module.css";
// import Profile from "../pages/profile/Profile";
// import Users from "../pages/users/Users";
// import Customization from "../pages/customization/Customization";
// import DashboardCard from "./DashboardCard";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";

// const Dashboard = () => {
//   const [activeSection, setActiveSection] = useState("dashboard");

//   const renderContent = () => {
//     switch (activeSection) {
//       case "dashboard":
//         return (
//           <div className={styles.dashboardCards}>
//             <h1 className={styles.h1}>Dashboard</h1>
//             <div className={styles.cardsContainer}>
//               <DashboardCard title="Total Users" value="1,234" />
//               <DashboardCard title="Active Sessions" value="567" />
//               <DashboardCard title="New Signups" value="89" />
//             </div>
//           </div>
//         );
//       case "profile":
//         return <Profile />;
//       case "user":
//         return <Users />;
//       case "customization":
//         return <Customization />;
//       default:
//         return <div>Section not found.</div>;
//     }
//   };

//   return (
//     <div className={styles.dashboard}>
//       <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
//       <main className={styles.mainContent}>
//         <Topbar />
//         <div className={styles.contentArea}>{renderContent()}</div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
