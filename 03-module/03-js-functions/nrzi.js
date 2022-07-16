const nrzi = (signal) => signal
  .split('')
  .map((item, i, arr) => {
    if (item === '|') {
      return '';
    }

    return arr[i - 1] === '|' ? 1 : 0;
  })
  .join('');

export default nrzi;

// const signal1 = '¯|__|¯|___|¯¯';
// console.log(`result1: ${nrzi(signal1)}\nexpect1: 010110010`); // '010110010'

// const signal2 = '_|¯¯¯|_|¯¯¯¯|_|¯¯';
// console.log(`result2: ${nrzi(signal2)}\nexpect2: 010011000110`); // '010011000110'

// const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
// console.log(`result3: ${nrzi(signal3)}\nexpect3: 010010000100111`); // '010010000100111'

// const signal4 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
// console.log(`result4: ${nrzi(signal4)}\nexpect4: 110010000100111`); // '110010000100111'

// const signal5 = '';
// console.log(`result5: ${nrzi(signal5)}\nexpect5: ''`); // ''

// const signal6 = '|';
// console.log(`result6: ${nrzi(signal6)}\nexpect6: ''`); // ''
