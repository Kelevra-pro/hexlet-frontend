const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const sayPrimeOrNot = (num) => console.log(isPrime(num) ? 'yes' : 'no');

// export default sayPrimeOrNot;

sayPrimeOrNot(5) // 'yes'
sayPrimeOrNot(4) // 'no'
