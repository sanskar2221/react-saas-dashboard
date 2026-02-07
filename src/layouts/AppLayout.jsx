import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import React from "react";


export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className=" ">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main area */}
      <div className="md:ml-64 h-full flex flex-col">
        {/* Top Navbar */}
        <TopNavbar
          onMenuClick={() => setSidebarOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6 pt-20">
          {React.cloneElement(children, { searchQuery })}
        </main>
      </div>
    </div>
  );
}
