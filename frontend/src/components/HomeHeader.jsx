import { useState, useEffect, useRef } from "react";
import SelectLanguage from "./SelectLanguage";
import { FaBars } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";


import "./HomeHeader.css";

export default function HomeHeader() {
    const { translations } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Check if screen size is mobile/tablet
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle click outside to close menu (only on mobile)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && menuOpen) {
                // Check if click is outside both the menu and hamburger button
                if (menuRef.current &&
                    !menuRef.current.contains(event.target) &&
                    hamburgerRef.current &&
                    !hamburgerRef.current.contains(event.target)) {
                    setMenuOpen(false);
                }
            }
        };

        if (isMobile && menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobile, menuOpen]);

    return (
        <header className="wrapper">
            {/* Left: Logo / Hamburger */}
            <div className="left">
                <img src="https://storage.123fakturera.se/public/icons/diamond.png" alt="logo" className="logo" />
                <div className="hamburger" ref={hamburgerRef} onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>

            {/* Center / Right: Nav + Language */}
            <div className="right-group">
                {/* Nav menu */}
                <nav className={`nav ${menuOpen ? "active" : ""}`} ref={menuRef}>
                    <ul className="nav-menu">
                        <li>{translations.home}</li>
                        <li>{translations.order}</li>
                        <li>{translations.ourCustomers}</li>
                        <li>{translations.aboutUs}</li>
                        <li>{translations.contactUs}</li>
                    </ul>
                </nav>

                {/* Language toggle */}
                <div className="right">
                    <SelectLanguage />
                </div>
            </div>
        </header>
    );
}
