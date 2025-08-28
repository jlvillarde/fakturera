import { useState } from "react";
import SelectLanguage from "./SelectLanguage";
import { FaBars } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";


import "./HomeHeader.css";

export default function HomeHeader() {
    const { translations } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="wrapper">
            {/* Left: Logo / Hamburger */}
            <div className="left">
                <img src="https://storage.123fakturera.se/public/icons/diamond.png" alt="logo" className="logo" />
                <div className="hamburger" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>

            {/* Center / Right: Nav + Language */}
            <div className="right-group">
                {/* Nav menu */}
                <nav className={`nav ${menuOpen ? "active" : ""}`}>
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
