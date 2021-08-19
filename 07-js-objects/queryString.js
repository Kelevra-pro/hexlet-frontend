const bqs = (data) => {
  const result = [];
  const keys = Object.keys(data).sort();

  for (const key of keys) {
    result.push(`${key}=${data[key]}`);
  }

  return result.join('&');
};

// export default bqs;

bqs({ per: 10, page: 1 });
// page=1&per=10
bqs({ param: 'all', param1: true });
// param=all&param1=true
