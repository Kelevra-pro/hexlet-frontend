const fill = (coll, value, start = 0, end = coll.length) => {
  const collSize = coll.length;
  const normalizedStart = start > collSize ? end : start;
  const normalizedEnd = end > collSize ? collSize : end;

  for (let i = normalizedStart; i < normalizedEnd; i += 1) {
    coll[i] = value;
  }

  return coll;
};

export default fill;
