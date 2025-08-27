import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const Translation = sequelize.define('Translation', {
    // Key are language code ex. en, sv
    key: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    // Name of Languauge ex. English, Svenska
    language: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Country code ex. GB, SE
    countryCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // JSON object contains all text translation
    values: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
}, {
    tableName: 'translations',
    timestamps: false,
});

export default Translation;
