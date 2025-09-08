import { FaUserCircle } from "react-icons/fa";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile">
            {/* Profile picture wrapper */}
            <div className="avatar">
                {/* Profile image */}
                <img
                    src="/icons/profile.png"
                    alt="Profile"
                    className="avatar-img"
                    onError={(e) => {
                        e.currentTarget.style.display = "none"; // hide if img fails
                        e.currentTarget.nextSibling.style.display = "block"; // show fallback
                    }}
                />
                {/* Fallback icon */}
                <FaUserCircle className="avatar-fallback" />

                {/* Online indicator */}
                <span className="online-indicator"></span>
            </div>

            {/* Profile info */}
            <div className="profile-info">
                <p className="name">John Andre</p>
                <p className="em">Startford AS</p>
            </div>
        </div>
    );
}
