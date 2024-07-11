import React, { Suspense } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import MobileSidebar from "../components/MobileSidebar";
import SideNavOverlay from "../components/SideNavOverlay";

const Layout = () => {
  return (
    <React.Fragment>
      <main className="flex items-start space-between relative w-screen h-screen bg-[#f8f8f8]">
        <Sidebar />

        <section className="w-full px-[25px] sm:px-[20px] md:w-[80%] h-screen mx-auto py-[24px] overflow-y-scroll">
          <Suspense fallback={<p className="flex items-center">Loading..</p>}>
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
