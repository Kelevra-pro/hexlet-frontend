const getLongestLength = (str) => {
  let sequence = [];
  let maxLength = 0;

  for (const char of str) {
    const index = sequence.indexOf(char);
    sequence.push(char);

    if (index !== -1) {
      sequence = sequence.slice(index + 1);
    }

    const sequenceLength = sequence.length;
    if (sequenceLength > maxLength) {
      maxLength = sequenceLength;
    }
  }

  return maxLength;
};

// export default getLongestLength;

getLongestLength('jabjcdel');           //7
getLongestLength('abcddef');            //4
getLongestLength('abbccddeffg');        //3
getLongestLength('abcd');               //4
getLongestLength('1234561qweqwer');     //9
getLongestLength('1234561qweqwerqer');  //9
getLongestLength('');                   //0
