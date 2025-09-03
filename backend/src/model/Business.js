import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const Business = sequelize.define('Business', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: { type: DataTypes.STRING(255), allowNull: false },
    address: { type: DataTypes.STRING(255) },
    address2: { type: DataTypes.STRING(255) },
    postCode: { type: DataTypes.STRING(255) },
    city: { type: DataTypes.STRING(255) },
    reference: { type: DataTypes.STRING(255) },
    phone: { type: DataTypes.STRING(50) },
    email: { type: DataTypes.STRING(255) },
    account: { type: DataTypes.STRING(100) },
    orgNumber: { type: DataTypes.STRING(100) },
    homepage: { type: DataTypes.STRING(255) }
}, {
    tableName: 'businesses'
})

export default Business;