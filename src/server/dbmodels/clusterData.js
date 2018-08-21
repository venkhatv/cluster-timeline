

module.exports = (sequelize, DataTypes) => {
  const PicklistValues = sequelize.define('ClusterData', {
    clusterId: {
      field: 'cluster_uuid',
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    blockId: {
      type: DataTypes.STRING,
      field: 'block_id',
    },
    date: {
      type: DataTypes.DATE,
      field: 'event_date',
    },
    caseCount: {
      type: DataTypes.INTEGER,
      field: 'case_count',
    },
    escalationCount: {
      type: DataTypes.INTEGER,
      field: 'escalation_count',
    },
    caseData: {
      type: DataTypes.STRING,
      field: 'case_data',
    },

    escalationData: {
      type: DataTypes.STRING,
      field: 'escalation_data',
    },
    softwareItems: {
      type: DataTypes.STRING,
      field: 'software_data',
    },
    hardwareItems: {
      type: DataTypes.STRING,
      field: 'hardware_data',
    },

  }, {
    schema: 'utl', freezeTableName: true, tableName: 'cluster_data', timestamps: false,
  });
  return PicklistValues;
};
