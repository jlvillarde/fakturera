import { NavLink } from "react-router-dom";
import {
    FiFileText, FiUsers, FiBriefcase, FiBook, FiTag,
    FiLayers, FiAlertCircle, FiGift, FiPackage,
    FiUserCheck, FiDownload, FiLogOut
} from "react-icons/fi";
import "./Sidebar.css";

export default function Sidebar() {
    const menuItems = [
        { path: "/dashboard/invoices", label: "Invoices", icon: <FiFileText /> },
        { path: "/dashboard/customers", label: "Customers", icon: <FiUsers /> },
        { path: "/dashboard/business", label: "My Business", icon: <FiBriefcase /> },
        { path: "/dashboard/journal", label: "Invoice Journal", icon: <FiBook /> },
        { path: "/dashboard/pricelist", label: "Price List", icon: <FiTag /> },
        { path: "/dashboard/multi-invoicing", label: "Multiple Invoicing", icon: <FiLayers /> },
        { path: "/dashboard/unpaid", label: "Unpaid Invoices", icon: <FiAlertCircle /> },
        { path: "/dashboard/offer", label: "Offer", icon: <FiGift /> },
        { path: "/dashboard/inventory", label: "Inventory Control", icon: <FiPackage /> },
        { path: "/dashboard/member", label: "Member Invoicing", icon: <FiUserCheck /> },
        { path: "/dashboard/import-export", label: "Import/Export", icon: <FiDownload /> },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Menu</h2>
            </div>

            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
                        >
                            <span className="indicator"></span>
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    </li>
                ))}

                <li className="logout">
                    <div className="menu-link">
                        <FiLogOut />
                        <span>Log out</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}