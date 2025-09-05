import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    const menuItems = [
        { path: "/dashboard/invoices", label: "Invoices", icon: 'invoice' },
        { path: "/dashboard/customers", label: "Customers", icon: 'customers' },
        { path: "/dashboard/business", label: "My Business", icon: 'my-business' },
        { path: "/dashboard/journal", label: "Invoice Journal", icon: 'invoice-journal' },
        { path: "/dashboard/pricelist", label: "Price List", icon: 'pricelist' },
        { path: "/dashboard/multi-invoicing", label: "Multiple Invoicing", icon: 'multiple-invoice' },
        { path: "/dashboard/unpaid", label: "Unpaid Invoices", icon: 'unpaid-invoice' },
        { path: "/dashboard/offer", label: "Offer", icon: 'offer' },
        { path: "/dashboard/inventory", label: "Inventory Control", icon: 'inventory-control' },
        { path: "/dashboard/member", label: "Member Invoicing", icon: 'member-invoicing' },
        { path: "/dashboard/import-export", label: "Import/Export", icon: 'export-import' },
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
                            <img src={`/icons/${item.icon}.png`} alt={item.label} />
                            <span>{item.label}</span>
                        </NavLink>
                    </li>
                ))}

                <li className="logout">
                    <div className="menu-link">
                        <img src={`/icons/logout.png`} />
                        <span>Log out</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}