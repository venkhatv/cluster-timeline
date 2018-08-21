import db from '../dbmodels';

export const getClusterList = async (req, res, next) => {
  try {
    const { query = {} } = req;
    // if (!req.query.order) {
    //   query = { ...query, order: [['order', 'ASC']] };
    // }

    query.limit = 200;
    const result = await db.ClusterList.findAll(query);
    res.json(result);
  } catch (err) {
    next(err);
  }
};


export const getClusterData = async (req, res, next) => {
  try {
    const { query } = req;
    const { id, blockId } = req.params;
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    const where = {
      date: {
        $between: [date, new Date()],
      },
      clusterId: id,
      blockId,
    };
    query.where = where;
    query.order = [['date', 'ASC']];
    console.log(query);
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

