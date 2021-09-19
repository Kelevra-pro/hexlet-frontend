const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);

  return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = (rational) => rational.numer;
const getDenom = (rational) => rational.denom;

const add = (rational1, rational2) => (
  makeRational(
    getNumer(rational1) * getDenom(rational2) + getNumer(rational2) *
    getDenom(rational1),
    getDenom(rational1) * getDenom(rational2),
  ));

const sub = (rational1, rational2) => (
  makeRational(
    getNumer(rational1) * getDenom(rational2) - getNumer(rational2) *
    getDenom(rational1),
    getDenom(rational1) * getDenom(rational2),
  ));

const ratToString = (rat) => rat.toString();

const rat1 = makeRational(3, 9);
getNumer(rat1); //.toBe(1);
getDenom(rat1); //.toBe(3);

const rat2 = makeRational(10, 3);
add(rat1, rat2); //.toEqual(makeRational(11, 3));
sub(rat1, rat2); //.toEqual(makeRational(-3, 1));

const rat3 = makeRational(-4, 16);
getNumer(rat3); //.toBe(-1);
getDenom(rat3); //.toBe(4);

const rat4 = makeRational(12, 5);
add(rat3, rat4); //.toEqual(makeRational(43, 20));
sub(rat3, rat4); //.toEqual(makeRational(-53, 20));

ratToString(rat1); //.toBe('1/3');
ratToString(rat3); //.toBe('-1/4');

const rat5 = makeRational(1, 15);
const rat6 = makeRational(4, 25);
add(rat5, rat6); //.toEqual(makeRational(17, 75));
sub(rat5, rat6); //.toEqual(makeRational(-7, 75));