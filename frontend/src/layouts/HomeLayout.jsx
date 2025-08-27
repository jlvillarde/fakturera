import HomeHeader from "../components/HomeHeader"
import bgImage from "../assets/sverige43.jpg";
import { useLanguage } from "../contexts/LanguageContext";

import "./HomeLayout.css";

export default function HomeLayout() {

    const { translations } = useLanguage();


    return (
        <div className="home">
            <HomeHeader />

            <main>
                {/* Title */}
                <div className="title">{translations.termsTitle}</div>

                <button className="close">{translations.closeAndGoBack}</button>

                <div className="terms">
                    {translations.terms}
                </div>

                <button className="close">{translations.closeAndGoBack}</button>
            </main>
        </div >
    )
}