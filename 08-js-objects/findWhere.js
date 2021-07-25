const findWhere = (data, searchData) => {
  const entries = Object.entries(searchData);

  for (const item of data) {
    let match = true;
    for (const [searchKey, searchValue] of entries) {
      if (item[searchKey] !== searchValue) {
        match = false;
      }
    }
    if (match) {
      return item;
    }
  }

  return null;
};

// export default findWhere;

const data = [
  { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
  { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
  { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
  { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
  { title: 'Still foooing', author: 'FooBar', year: 3333 },
  { title: 'Happy Foo', author: 'FooBar', year: 4444 },
];

// findWhere(data, { author: 'Shakespeare', year: 1611 });
// { title: 'Cymbeline', 'author: 'Shakespeare', 'year: 1611 }

findWhere(data, { author: 'undefined', year: 1611 });
// null

// findWhere(data, { year: 4444 });
// { title: 'Happy Foo', author: 'FooBar', year: 4444 }

// findWhere(data, { author: 'Shakespeare', year: 1611, title: 'The Tempest' });
// { title: 'The Tempest', author: 'Shakespeare', year: 1611 }
