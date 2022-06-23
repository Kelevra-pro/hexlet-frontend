import _ from 'lodash';

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    return _.sumBy(this.getItems(), ({ item, count }) => item.price * count);
  }

  getCount() {
    return _.sumBy(this.getItems(), ({ count }) => count);
  }
}

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);

cart.getItems().length; // 2
cart.getCost(); // 35
cart.getCount(); // 7
