import React, { Suspense } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import MobileSidebar from "../components/MobileSidebar";
import SideNavOverlay from "../components/SideNavOverlay";

const Layout = () => {

  return (
    <React.Fragment>
      <main className="flex items-start space-between relative w-screen min-h-full">
        <Sidebar />

        <section className="absolute left-0 md:left-[20%] w-full px-[25px] sm:px-[20px] md:w-[80%] h-full mx-auto py-[24px] overflow-y-scroll">
          <Suspense fallback={<div className="flex items-center text-center justify-center h-[300px]">Loading..</div>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
      <MobileSidebar />

       <SideNavOverlay />
    </React.Fragment>
  );
};

export default Layout;
