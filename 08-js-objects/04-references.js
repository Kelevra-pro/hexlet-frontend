const is = (company1, company2) => {
  const keys = ['name', 'state', 'website'];

  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }

  return true;
};

// export default is;

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
is(company1, company2); // false

const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
is(company3, company4); // true
