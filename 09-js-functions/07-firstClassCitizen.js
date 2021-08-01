const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (word, reverseSize) => {
    const textSize = word.length;

    if (textSize < reverseSize) {
      return null;
    }

    return word.slice(-reverseSize).split('').reverse().join('');
  };
  // END

  return takeLast(text, 4);
};

// export default run;

run('');       // null
run('cb');     // null
run('power');  // rewo
run('hexlet'); // telx
