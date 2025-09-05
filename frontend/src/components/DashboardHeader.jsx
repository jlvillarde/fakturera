import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // hamburger icon
import SelectLanguage from "../components/SelectLanguage";
import Profile from "./Profile";
import { useMediaQuery } from "../hooks/useMediaQuery";

import "./DashboardHeader.css";

export default function DashboardHeader({ onToggleSidebar }) {

    const isNarrow = useMediaQuery('(max-width: 1200px)')

    return (
        <header className="dashboard-header">
            <div className="wrapper">
                {/* Profile OR Hamburger */}
                <div className="profile-container">
                    {isNarrow ? (
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
