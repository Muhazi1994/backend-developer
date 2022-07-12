'use strict'

const sequelize = require("sequelize");
const { Sequelize } = require("../models");

// const { Sequelize } = require("../models")

module.esports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("users", {
            id : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            Name : {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            role : {
                type: Sequelize.STRING,
                dafaultValue: "customer, merchant",
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        });
    },
    down : async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    } 
};















'Use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autorIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                uniquer: true,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            role: {
                type: Sequelize.STRING,
                defaultValue: "customers, merchant",
                allowNull: false,
            }
        })
    }
}