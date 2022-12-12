const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bar extends Model {}

Bar.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        //we dont neeed rating here, the calculation will go in the dashboard route
        // rating: {
        //     type: DataTypes.FLOAT,
        //     defaultValue: 0,
        //     references: {
        //         model: 'bar',
        //         key: 'rating'
        //     }
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bar',
    }
);

module.exports = Bar;