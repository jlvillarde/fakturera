import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

import "./SelectLanguage.css";

export default function SelectLanguage() {
    const { language, countryCode, changeLanguage } = useLanguage();
    const [open, setOpen] = useState(false);

    // List of available languages
    const languages = [
        { code: "en", name: "English", countryCode: "GB" },
        { code: "sv", name: "Svenska", countryCode: "SE" }
    ];

    const handleSelect = (lang) => {
        changeLanguage(lang.code);
        setOpen(false);
    };

    return (
        <div className="language-selector">
            <div className="selected" onClick={() => setOpen(!open)}>
                <span>{language}</span>
                <img
                    src={`${countryCode}.png`}
                    alt={`${countryCode} flag`}
                    className="flag"
                />
            </div>

            {open && (
                <ul className="dropdown">
                    {languages.map((lang) => (
                        <li key={lang.code} onClick={() => handleSelect(lang)}>
                            <img
                                src={`${lang.countryCode}.png`}
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
