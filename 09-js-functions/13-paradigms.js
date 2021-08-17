const arr = [
  ["*", "*", "*", "*"],
  ["*", " ", " ", "*"],
  ["*", " ", " ", "*"],
  ["*", "*", "*", "*"],
];
// ****
// *  *
// *  *
// ****

const duplicate = (items) => items.flatMap((item) => [item, item]);

const enlargeArrayImage = (col) => {
  const horizontalDuplicate = col.map(duplicate);

  return duplicate(horizontalDuplicate);
};

// export default enlargeArrayImage;

enlargeArrayImage(arr);
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********
