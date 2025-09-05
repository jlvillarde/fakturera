import { useMediaQuery } from "../../hooks/useMediaQuery";
import { FiArrowDown } from "react-icons/fi";

export function PricelistHeader() {

    const isNarrow = useMediaQuery('(max-width: 1200px)')


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

                {
                    isNarrow ? (
                        <>
                            <th>In Stock</th>
                            <th>Unit</th>
                        </>

                    ) : (
                        <>
                            <th>Unit</th>
                            <th>In Stock</th>
                        </>
                    )
                }

                <th>Description</th>
                <th></th>
            </tr>
        </thead>
    );
}


