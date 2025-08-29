import HomeHeader from "../components/HomeHeader";
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
                {translations.termsTitle && (
                    <div className="title">{translations.termsTitle}</div>
                )}

                {/* Close button */}
                {translations.closeAndGoBack && (
                    <button className="close">
                        {translations.closeAndGoBack}
                    </button>
                )}

                {/* Terms */}
                {translations.terms && (
                    <div
                        className="terms"
                        dangerouslySetInnerHTML={{ __html: translations.terms }}
                    />
                )}

                {/* Accept button */}
                {translations.agreeAndContinue && (
                    <button
                        className="accept"
                        onClick={() => navigate("/dashboard")}
                    >
                        {translations.agreeAndContinue}
                    </button>
                )}
            </main>
        </div>
    );
}
