const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currency = this.getCurrency();
  const currentValue = this.getValue();
  if (currency === newCurrency) {
    return new Money(currentValue, currency);
  }
  const newValue = currentValue * rates[currency][newCurrency];

  return new Money(newValue, newCurrency);
};

Money.prototype.add = function add(money) {
  const currency = this.getCurrency();
  const convertedMoney = money.exchangeTo(currency);
  const additionalValue = convertedMoney.getValue();

  return new Money(this.getValue() + additionalValue, currency);
};

Money.prototype.format = function format() {
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};

const money1 = new Money(100);

// Возвращает значение
money1.getValue(); // 100
console.log('money1.getValue()', money1.getValue());

// Конвертирует в указанную валюту и возвращает новое значение
money1.exchangeTo('eur').getValue(); // 70
console.log('money1.exchangeTo(\'eur\').getValue()', money1.exchangeTo('eur').getValue());

const money2 = new Money(200, 'eur');
money2.getValue(); // 200
console.log('money2.getValue()', money2.getValue());

const money3 = money2.add(money1);
money3.getValue(); // 270
console.log('money3.getValue()', money3.getValue());

const money4 = money1.add(money2);
money4.getValue(); // 340
console.log('money4.getValue()', money4.getValue());

money1.format(); // "$100.00"
console.log('money1.format()', money1.format());

money2.format(); // "€200.00"
console.log('money2.format()', money2.format());

const money5 = new Money(10000);
money5.format(); // "$10,000.00"
console.log('money5.format()', money5.format());
