// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. 
// Какими объектами можно заменить их элементы? Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.


let catalog = [
    {
        id: 1,
        title: 'Кот Витя',
        price: 10000
    },
    {
        id: 2,
        title: 'Кот Барсик',
        price: 1200
    },
    {
        id: 3,
        title: 'Кот Роки',
        price: 10
    }
    {
        id: 4,
        title: 'Кот Рама',
        price: 1000
    }
    {
        id: 5,
        title: 'Кот Бизон',
        price: 200
    }
    {
        id: 6,
        title: 'Кот Коржик',
        price: 300
    }
    {
        id: 7,
        title: 'Кот Кракозяблик',
        price: 245
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