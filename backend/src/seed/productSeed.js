import sequelize from "../config/db.js";
import Product from "../model/Product.js";

async function seedProducts() {
    try {
        await sequelize.sync({ force: false });

        const sampleProducts = Array.from({ length: 20 }, (_, i) => ({
            articleNo: `ART-${1000 + i}`,
            product: `Sample Product ${i + 1}`,
            inPrice: (50 + i * 5).toFixed(2), // e.g. 50.00, 55.00...
            price: (80 + i * 7).toFixed(2),   // e.g. 80.00, 87.00...
            unit: "pcs",
            stock: Math.floor(Math.random() * 100), // random stock 0–99
            description: `This is a description for Sample Product ${i + 1}`,
            deleted_at: null,
        }));

        await Product.bulkCreate(sampleProducts, { ignoreDuplicates: true });

        console.log("20 sample products seeded successfully.");
    } catch (error) {
        console.error("Error seeding products:", error);
    }
}

export default seedProducts;
