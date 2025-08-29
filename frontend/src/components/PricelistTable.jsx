import { useRef, useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { usePricelistData } from "./pricelist/usePricelistData";
import { PricelistHeader } from "./pricelist/PricelistHeader";
import { PricelistRow } from "./pricelist/PricelistRow";
import "./PricelistTable.css";

export default function PricelistTable() {
    // Fetches pricelist data using a custom hook, managing loading, error, and data modification states.
    const { rows, loading, error, handleChange, isRowModified, saveRow, savingIndex } = usePricelistData();
    // Manages the currently selected row index.
    const [selectedIndex, setSelectedIndex] = useState(null);
    // Manages the vertical position of the arrow indicator.
    const [arrowTop, setArrowTop] = useState(0);
    // Ref for the container element to handle scrolling.
    const containerRef = useRef(null);
    // Ref to store references to each row element for position calculations.
    const rowRefs = useRef([]);

    // Calculates and updates the arrow's position to align with the selected row.
    const updateArrowPosition = (index) => {
        const rowEl = rowRefs.current[index];
        if (!rowEl) return;
        const offsetTop = rowEl.offsetTop;
        const height = rowEl.offsetHeight;
        setArrowTop(offsetTop + Math.max(0, height / 2) - 10);
    };

    // Handles click events on a row, setting it as selected and updating the arrow position.
    const handleRowClick = (index) => {
        setSelectedIndex(index);
        updateArrowPosition(index);
    };

    // Attaches and cleans up scroll and resize event listeners to keep the arrow position updated.
    useEffect(() => {
        const onScrollOrResize = () => {
            if (selectedIndex !== null) updateArrowPosition(selectedIndex);
        };
        const container = containerRef.current;
        if (container) container.addEventListener("scroll", onScrollOrResize);
        window.addEventListener("resize", onScrollOrResize);
        return () => {
            if (container) container.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, [selectedIndex]);

    // Displays a loading message while data is being fetched.
    if (loading) return <p>Loading...</p>;
    // Displays an error message if data fetching fails.
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    // Renders the main table structure and maps over the data to render each row.
    return (
        <div className="table-container" ref={containerRef}>
            <table className="pricelist-table">
                <PricelistHeader />
                <tbody>
                    {rows.map((row, index) => (
                        <PricelistRow
                            key={row.clientKey}
                            ref={(el) => (rowRefs.current[index] = el)}
                            row={row}
                            index={index}
                            selected={selectedIndex === index}
                            onClick={() => handleRowClick(index)}
                            onChange={handleChange}
                            onSave={saveRow}
                            isModified={isRowModified(index)}
                            saving={savingIndex === index}
                        />
                    ))}
                </tbody>
            </table>
            {/* Renders an arrow next to the selected row for better user orientation. */}
            {selectedIndex !== null && (
                <div className="row-pointer" style={{ top: `${arrowTop}px` }}>
                    <FiArrowRight size={16} />
                </div>
            )}
        </div>
    );
}
