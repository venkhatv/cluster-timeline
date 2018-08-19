

module.exports = (sequelize, DataTypes) => {
  const Marketing = sequelize.define('Marketing', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    contentType: DataTypes.STRING,
    notes: DataTypes.STRING,
    order: DataTypes.INTEGER,
    tier: DataTypes.STRING,
    instructions: DataTypes.STRING,
    resources: DataTypes.STRING
  }, {});
  Marketing.associate = function (models) {//eslint-disable-line
    // associations can be defined here
  };
  return Marketing;
};
