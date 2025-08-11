import { Outlet } from "react-router-dom";
import Navbar from "../client/components/navbar/Navbar";

const ClientLayout = () => {
  return (
    <main className="frontend-layout">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default ClientLayout;
