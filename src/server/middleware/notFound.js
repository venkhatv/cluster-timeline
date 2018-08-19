import HTTPStatus from 'http-status-codes';

const notFound = (req, res, next) => {
  const err = new Error();
  err.statusCode = HTTPStatus.NOT_FOUND;
  err.message = 'Resource Not Found';
  next(err);
};

export default notFound;
