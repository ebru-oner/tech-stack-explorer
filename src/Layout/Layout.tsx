import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
