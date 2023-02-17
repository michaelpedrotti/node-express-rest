
'use strict';
const { DataTypes, Model } = require('sequelize');
 
/**
 * 
 * @example https://sequelize.org/v4/manual/tutorial/models-definition.html
 */
class PermissionModel extends Model {}
 
PermissionModel.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    resource:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    actions:{
        type: DataTypes.JSON(),
        allowNull: false
    }
},
{
    sequelize: global.sequelize,
    modelName:'PermissionModel',
    tableName: 'permission',
    timestamps: true
});

 
module.exports = PermissionModel;