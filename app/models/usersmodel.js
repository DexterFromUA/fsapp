'use strict';
module.exports = (sequelize, DataTypes) => {
    const usersModel = sequelize.define('usersModel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        mail: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    }, {});

    return usersModel;
};
