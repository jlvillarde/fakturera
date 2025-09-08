import './BusinessProfile.css'
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";

export default function BusinessProfile() {
    return (
        <div className="business-profile-container">
            <div className="title">Profile picture</div>

            <img
                src="https://tropicflow.com/cdn/shop/files/dumbo-fin-blue-halfmoon-betta-fish.jpg"
                alt="logo"
            />

            <div className='business-profile-action'>
                <button>
                    Edit Original
                    <img src={`/icons/upload.png`} />
                </button>

                <button>
                    Upload New
                    <img src={`/icons/upload.png`} />
                </button>
                {/* <button>Edit Original <MdEditDocument /></button>
                <button>Upload New <FaCloudUploadAlt /> </button> */}
            </div>

        </div>
    )
}