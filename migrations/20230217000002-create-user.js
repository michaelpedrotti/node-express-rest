'use strict';

module.exports = {
  
  /**
   * @param {sequelize.queryInterface} queryInterface
   * @param {sequelize.DataTypes} DataTypes
   * @link https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface 
   */
  up: (queryInterface, { DataTypes }) => {
    return queryInterface.createTable('user', {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email:{
        unique: true,
        type: DataTypes.STRING,
        allowNull: false
      },
      password:{
        type: DataTypes.STRING(100),
        allowNull: false
      },
      profile_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            name: 'fk_63f64cc127e85',
            model: 'profile',
            key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      createdAt:{
        type: DataTypes.DATE,
        allowNull: true
      },
      updatedAt:{
        type: DataTypes.DATE,
        allowNull: true
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('user');
  }
};