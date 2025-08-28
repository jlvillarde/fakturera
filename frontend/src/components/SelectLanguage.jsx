import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

import "./SelectLanguage.css";

export default function SelectLanguage() {
    const { language, countryCode, changeLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // List of available languages
    const languages = [
        { code: "en", name: "English", countryCode: "GB" },
        { code: "sv", name: "Svenska", countryCode: "SE" }
    ];

    const handleSelect = (lang) => {
        changeLanguage(lang.code);
        setOpen(false);
    };

    // ✅ Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="language-selector" ref={dropdownRef}>
            <div className="selected" onClick={() => setOpen(!open)}>
                <span>{language}</span>
                <img
                    src={`https://storage.123fakturere.no/public/flags/${countryCode}.png`}
                    alt={`${countryCode} flag`}
                    className="flag"
                />
            </div>

            {open && (
                <ul className="dropdown">
                    {languages.map((lang) => (
                        <li key={lang.code} onClick={() => handleSelect(lang)}>
                            <img
                                src={`https://storage.123fakturere.no/public/flags/${lang.countryCode}.png`}
                                alt={`${lang.countryCode} flag`}
                                className="flag"
                            />
                            <span>{lang.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
