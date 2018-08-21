

module.exports = (sequelize, DataTypes) => {
  const PicklistValues = sequelize.define('ClusterList', {
    clusterId: {
      field: 'cluster_uuid',
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    blockIds: {
      type: DataTypes.STRING,
      field: 'block_id_list',
    },
  }, {
    schema: 'utl', freezeTableName: true, tableName: 'cluster_list', timestamps: false,
  });
  return PicklistValues;
};

