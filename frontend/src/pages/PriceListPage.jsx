import SearchBar from "../components/SearchBar";
import ActionButton from "../components/ActionButton";
import { FaPlus, FaPrint, FaSlidersH } from "react-icons/fa";

import "./PricelistPage.css"
import PricelistTable from "../components/PricelistTable";

export default function PriceListPage() {
    return (
        <div className="price-list-page">

            <div className="action-container">

                {/* Search Bars */}
                <div className="search-section">
                    <SearchBar placeholder="Search Article No..." />
                    <SearchBar placeholder="Search Product..." />
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                    <ActionButton
                        text="New Product"
                        icon='/icons/add-product.png'
                        color="#28a745"  // green
                        onClick={() => console.log("New Product clicked")}
                    />
                    <ActionButton
                        text="Print List"
                        icon='/icons/print.png'
                        color="#17a2b8"  // teal
                        onClick={() => console.log("Print clicked")}
                    />
                    <ActionButton
                        text="Advanced Mode"
                        icon='/icons/advance-mode.png'
                        color="#17a2b8"
                        onClick={() => console.log("Advanced Mode clicked")}
                    />
                </div>
            </div>

            {/* Pricelist Table */}
            <PricelistTable />

        </div>
    );
}
