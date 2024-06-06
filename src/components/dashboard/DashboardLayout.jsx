import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

const DashboardLayout = () => {
  return (<>
    <div className="flex h-full">
      <Navbar />
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full h-[calc(100vh-105px)] pl-3 md:pl-5 pr-3 md:pr-[30px] pb-5 md:ml-[300px] mt-[105px] flex flex-col grow">
        <Outlet />
      </div>
    </div>
  </>)
}

export default DashboardLayout;