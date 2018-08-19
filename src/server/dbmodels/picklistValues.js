module.exports = (sequelize, DataTypes) => {
  const PicklistValues = sequelize.define('PicklistValues', {
    name: {
      type: DataTypes.STRING,
      field: 'name',
    },
    values: {
      type: DataTypes.JSON,
      field: 'values',
    },
  }, {
    schema: 'public', freezeTableName: true, tableName: 'PicklistValues', timestamps: false,
  });
  return PicklistValues;
};
