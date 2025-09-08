import './businessPage.css'

import BusinessDetails from '../components/business/BusinessDetails';
import BusinessLogoSettings from '../components/business/BusinessLogoSettings';

import { TbListDetails } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { MdNotes } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import BusinessProfile from '../components/business/BusinessProfile';

export default function BusinessPage() {


    return (
        <main className='business-page'>

            {/* Action buttons */}
            <div className='business-action-buttons'>
                <button className='active'>
                    <p>Business Details</p>
                    <img src={`/icons/business-details.png`} />
                </button>
                <button>
                    <p>Settings</p>
                    <img src={`/icons/business-settings.png`} />
                </button>
                <button>
                    <p>Standard texts</p>
                    <img src={`/icons/standard-text.png`} />
                </button>
                <button>
                    <p>Go to invoices</p>
                    <img src={`/icons/invoice.png`} />
                </button>
            </div>

            <div className='container'>
                <div className='business-content'>

                    <div className='business-details'>
                        <BusinessDetails />
                    </div>

                    <div className='border'>

                    </div>

                    <div className='business-profile'>
                        <BusinessLogoSettings />
                        <BusinessProfile />
                    </div>
                </div>

            </div>

        </main>
    )
}