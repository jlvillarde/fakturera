import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // hamburger icon
import SelectLanguage from "../components/SelectLanguage";
import Profile from "./Profile";

import "./DashboardHeader.css";

export default function DashboardHeader({ onToggleSidebar }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    // Watch screen resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="dashboard-header">
            <div className="wrapper">
                {/* Profile OR Hamburger */}
                <div className="profile-container">
                    {isMobile ? (
                        <button
                            className="hamburger-btn"
                            onClick={onToggleSidebar}
                        >
                            <FaBars size={22} />
                        </button>
                    ) : (
                        <Profile />
                    )}
                </div>

                {/* Language toggle */}
                <div>
                    <SelectLanguage />
                </div>
            </div>
        </header>
    );
}
