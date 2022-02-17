const bind = (context, func) => (...args) => func.apply(context, args);

// export default bind;

const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
fnWithContext(3); // 8
