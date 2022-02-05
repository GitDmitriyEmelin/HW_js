// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. 
// Какими объектами можно заменить их элементы? Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.


let catalog = [
    {
        id: 1,
        title: 'Компьютер',
        price: 10000
    },
    {
        id: 2,
        title: 'Телефон',
        price: 1200
    },
    {
        id: 3,
        title: 'Шляпа',
        price: 10
    }
];

class Cart {
    constructor(products = []) {
        this.totalPrice = 0
        this.products = products
        this.computeTotalPrice()
    }
    computeTotalPrice() {
        for (const cartItem of this.products) {
            if (cartItem.price > 0) {
                this.totalPrice += cartItem.price;
            }
        }
    }
    addToCart(product) {
        this.products.push(product);
        this.totalPrice += product.price;
    }
}

let cart1 = new Cart();
cart1.addToCart(catalog[0]);
console.log(cart1.totalPrice);