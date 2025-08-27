import { useState, useContext, createContext, useEffect } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {

    const [languageCode, setLanguageCode] = useState('en');
    const [translations, setTranslations] = useState({});
    const [language, setLanguage] = useState('English');
    const [countryCode, setCountryCode] = useState('GB')

    const fetchTranslations = async (languageCode) => {
        try {
            const response = await fetch(`/api/translations/${languageCode}`);
            const data = await response.json();
            setTranslations(data.values);
            setLanguage(data.language);
            setCountryCode(data.countryCode);
        } catch (error) {
            console.error("Error fetching translations:", error);
        }
    }

    const changeLanguage = (languageCode) => {
        setLanguageCode(languageCode);
        fetchTranslations(languageCode);
    }

    useEffect(() => {
        fetchTranslations(languageCode);
    }, [languageCode]);


    return (
        <LanguageContext.Provider value={{ languageCode, translations, language, countryCode, changeLanguage, }}>
            {children}
        </LanguageContext.Provider>
    )


}

export const useLanguage = () => useContext(LanguageContext)