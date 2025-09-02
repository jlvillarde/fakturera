import './BusinessLogoSettings.css'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";


export default function BusinessLogoSettings() {
    return (
        <div className="business-logo-container">
            <div className="title">Our Logo</div>

            <img
                src="https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg"
                alt="logo"
            />

            <div className="action-buttons">
                <div>Use logo</div>
                <div className='use-logo-options'>
                    <button>Yes</button>
                    <span></span>
                    <button>No</button>
                </div>
            </div>

            <div className="action-buttons">
                <div>Choose Logo</div>
                <button>Upload new <FaCloudUploadAlt /></button>
            </div>

            <div className="action-buttons">
                <div>Preview Logo</div>
                <button>Upload preview <FaSearchPlus /></button>
            </div>


        </div >
    )
}