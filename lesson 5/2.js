// Сделать генерацию корзины динамической, то есть верстка корзины не должна 
// находиться в HTML-структуре. Там должен быть только div, в который будет 
// вставляться корзина, сгенерированная кодом на JavaScript:
// Пустая корзина должна выводить строку «Корзина пуста».
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


let catalog = [
    {
        id: 1,
        title: 'Кот Ишка',
        description: 'ffrefreffref',
        price: 100,
        image: './images/1.JPG',
    },
    {
        id: 2,
        title: 'Кот Барсик',
        description: 'ferferfrefrfe',
        price: 1200,
        image: './images/2.JPG',
    },
    {
        id: 3,
        title: 'Кот Роки',
        description: 'frerfrefref',
        price: 900,
        image: './images/3.JPG',
    },
    {
        id: 4,
        title: 'Кот Рама',
        description: 'ferfrfre',
        price: 1000,
        image: './images/4.JPG',
    },
    {
        id: 5,
        title: 'Кот Бизон',
        description: 'ferfrefre',
        price: 200,
        image: './images/5.JPG',
    },
    {
        id: 6,
        title: 'Кот Коржик',
        description: 'ferfrfrefr',
        price: 300,
        image: './images/6.JPG',
    },
    {
        id: 7,
        title: 'Кот Кракозяблик',
        description: 'frff',
        price: 250,
        image: './images/7.JPG',
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

    itemCountById(id) {
        let productsListId = this.products.filter(product => product.id === id);
        return productsListId.length;
    }

    add(product) {
        this.products.push(product);
        this.totalPrice += product.price;
    }

    render() {
        let cartEl = document.getElementById('cart');
        console.log(cartEl, 'cartEl');
        let listEl = document.createElement('div');
        listEl.classList.add('list');
        let itemsIds = [];
        for (let item of this.products) {
            if (itemsIds.includes(item.id)) continue;
            itemsIds.push(item.id);

            // создаем элемент с классом item
            let itemEl = document.createElement('div');
            itemEl.classList.add('item');

            // создаем элемент с классом image-container
            let itemImgContainer = document.createElement('div');
            itemImgContainer.classList.add('image-container');

            // создаем изображение
            let itemImg = document.createElement('img');

            // создаем атрибут src с ссылкой на изображение
            itemImg.setAttribute('src', item.image);

            // добавляем изображение itemImg в  itemImgContainer
            itemImgContainer.appendChild(itemImg);

            // добавляем itemImgContainer в itemEl
            itemEl.appendChild(itemImgContainer);

            // создаем блок с названием и описанием
            let contentEl = document.createElement('div');
            contentEl.classList.add('item-chunk', 'content');
            let titleEl = document.createElement('div');
            titleEl.classList.add('item-title');
            titleEl.innerHTML = item.title;
            contentEl.appendChild(titleEl);
            let descriptionEl = document.createElement('div');
            descriptionEl.innerHTML = item.description;
            contentEl.appendChild(descriptionEl);
            itemEl.appendChild(contentEl);
            listEl.appendChild(itemEl);

            // создаем блок с ценой
            let priceEl = document.createElement('div');
            priceEl.classList.add('price', 'item-chunk', 'center');
            priceEl.innerHTML = `${item.price}<span class="currency">руб.</span>`;
            itemEl.appendChild(priceEl);

            // создаем блок с количеством
            let countEl = document.createElement('div');
            countEl.classList.add('item-count', 'item-chunk', 'center');
            let inputEl = document.createElement('input');
            inputEl.setAttribute('type', 'number');
            inputEl.setAttribute('min', 1);
            inputEl.setAttribute('value', this.itemCountById(item.id));
            countEl.appendChild(inputEl);
            itemEl.appendChild(countEl);
        }
        // добавляем блок класса list в блок с id cart
        cartEl.appendChild(listEl);

        // Создаем сводку
        let totalEl = document.createElement('div');
        totalEl.classList.add('total');
        let totalPrice = this.totalPrice;
        let totalCount = this.products.length;
        totalEl.innerHTML = `
            <div>Всего товаров: ${totalCount} </div>
            <div>Всего к оплате: ${totalPrice} руб.</div>
        `
        cartEl.appendChild(totalEl);
    }
}

let cart = new Cart(catalog);
console.log(cart.totalPrice, 'totalPrice')
cart.add(catalog[0])
cart.add(catalog[0])
cart.add(catalog[5])
cart.render()