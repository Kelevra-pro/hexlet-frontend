const each = (arr, callback) => (
  arr.forEach((item) => callback.call(item))
);

// export default each;

const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];
each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];
