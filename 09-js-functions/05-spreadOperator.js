const convert = (...dates) => {
  const result = [];

  for (const item of dates) {
    const date = new Date(...item);
    const formattedDate = date.toDateString();
    result.push(formattedDate);
  }

  return result;
};

// export default convert;

convert();
// []

convert([1993, 3, 24]);
// ['Sat Apr 24 1993']

convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']