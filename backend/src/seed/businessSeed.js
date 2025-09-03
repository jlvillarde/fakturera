import sequelize from '../config/db.js'
import Business from '../model/Business.js'

async function seedBusiness() {
    try {
        await sequelize.sync({ force: false })

        await Business.create({
            name: "Company X",
            address: "fake address",
            address2: "fake address2",
            postCode: "1287",
            city: "City Z",
            reference: "John Lester",
            phone: "0930603090",
            email: "jlvillarde03@gmail.com",
            account: "12345",
            orgNumber: "org",
            homepage: "https://companyx.com"
        })

        console.log('Sample business seeded successfully')

    } catch (error) {
        console.error("Error seeding business:", error);
    }
}

export default seedBusiness