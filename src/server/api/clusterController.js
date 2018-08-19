import db from '../dbmodels';

export const getClusterList = async (req, res, next) => {
  try {
    const { query } = req;
    // if (!req.query.order) {
    //   query = { ...query, order: [['order', 'ASC']] };
    // }
    const result = await db.ClusterList.findAll(query);
    res.json(result);
  } catch (err) {
    next(err);
  }
};


export const getClusterData = async (req, res, next) => {
  try {
    const { query } = req;
    // if (!req.query.order) {
    //   query = { ...query, order: [['order', 'ASC']] };
    // }
    const result = await db.ClusterData.findAll(query);
    res.json(result);
  } catch (err) {
    next(err);
  }
};


export const getTestData = async (req, res, next) => {
  try {
    const { query } = req;
    // console.log('db objects', db, '\n');
    const result = await db.TestData.findAll(query);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

