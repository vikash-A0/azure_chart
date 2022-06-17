const { values } = require('lodash');
const Sequelize = require('sequelize');
const db = require('../database/db');

const Chart = db.define('chart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    MetricName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ResourceName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    P80: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    P90: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    avg: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    TimeGenerated: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    max: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    min: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = Chart;