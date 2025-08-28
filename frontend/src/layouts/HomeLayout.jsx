import HomeHeader from "../components/HomeHeader"
// import 'https://storage.123fakturera.se/public/wallpapers/sverige43.jpg'
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

import "./HomeLayout.css";

export default function HomeLayout() {

    const { translations } = useLanguage();
    const navigate = useNavigate();


    return (
        <div className="home">
            <HomeHeader />

            <main>
                {/* Title */}
                <div className="title">{translations.termsTitle}</div>

                <button className="close">{translations.closeAndGoBack}</button>

                <div
                    className="terms"
                    dangerouslySetInnerHTML={{ __html: translations.terms }}
                ></div>


                <button className="close" onClick={() => navigate("/dashboard")}>{translations.agreeAndContinue}</button>
            </main>
        </div >
    )
}