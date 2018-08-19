module.exports = (sequelize, DataTypes) => {
  const TestData = sequelize.define('TestData', {

    cluster: {
      type: DataTypes.STRING,
      field: 'ClusterId',
    },
    blocks: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: 'BlocksIds',
    },
  }, {
    schema: 'public', freezeTableName: true, tableName: 'TestData', timestamps: false,
  });
  return TestData;
};

// id: {
//   primaryKey: true,
//   field: 'id',
//   type: DataTypes.STRING,
// },
