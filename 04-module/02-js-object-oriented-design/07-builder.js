import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

const books = [
  { name: 'book', author: 'author' },
  { author: 'author 2' },
];

const schema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  pagesCount: yup.number(),
  link: yup.string().url().min(1),
  genre: yup.string().oneOf(genres),
});

const getInvalidBooks = (books) => books.filter((book) => !schema.isValidSync(book));

const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]
console.log('invalidBooks', invalidBooks);
