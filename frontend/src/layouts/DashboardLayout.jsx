import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="dashboard-layout">
            <DashboardHeader onToggleSidebar={toggleSidebar} />

            <div className={`dashboard-main ${isSidebarOpen ? "sidebar-open" : ""}`}>
                <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
                    <Sidebar />
                </div>
                <div className="dashboard-content">
                    <Outlet />
                </div>
                {isSidebarOpen && (
                    <div
                        className="sidebar-backdrop"
                        onClick={toggleSidebar}
                        aria-hidden="true"
                    />
                )}
            </div>
        </div>
    );
}
