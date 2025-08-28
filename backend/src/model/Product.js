import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Pricelist = sequelize.define("Product", {
    articleNo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    product: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    inPrice: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: "products",
    timestamps: true,
});

export default Pricelist;
