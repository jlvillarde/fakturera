import { FiArrowDown } from "react-icons/fi";

export function PricelistHeader() {
    return (
        <thead>
            <tr>
                <th>
                    <span className="th-with-icon">
                        Article No.
                        <FiArrowDown className="th-icon article" />
                    </span>
                </th>
                <th>
                    <span className="th-with-icon">
                        Product/Service
                        <FiArrowDown className="th-icon product" />
                    </span>
                </th>
                <th>In Price</th>
                <th>Price</th>
                <th>Unit</th>
                <th>In Stock</th>
                <th>Description</th>
                <th></th>
            </tr>
        </thead>
    );
}


