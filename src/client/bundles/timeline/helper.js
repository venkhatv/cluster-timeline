import momemt from 'moment';


export const dateConverter = function (dateString) {
  const dateObj = new moment(dateString, 'YYYY-MM-DD');
  const dateFormatted = dateObj.format('DD MMM YY');
  return dateFormatted;
};

// export default obj;
