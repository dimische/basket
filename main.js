
//каталог товаров
var product = [
    { 'p001': 1, name: 'Огурец', price: 60 },
    { 'p002': 2, name: 'Капуста', price: 120 },
    { 'p003': 3, name: 'помидор', price: 70 }
];


//вывод товара на страницу
var divCatalog = document.createElement('div'); divCatalog.className = 'catalog';
document.body.appendChild(divCatalog);

var divItem = document.createElement('div'); divItem.className = 'catalog-item';
divCatalog.appendChild(divItem);

//первый элемент каталога
var divProduct = document.createElement('div'); divProduct.className = 'product';
divItem.appendChild(divProduct);
divProduct.innerHTML = '<img src="https://www.fillmurray.com/150/150" alt=""> ';
var productName = document.createElement('p'); productName.textContent = product[0].name;
divProduct.appendChild(productName);
var productName = document.createElement('p'); productName.textContent = 'Цена ' + product[0].price + ' руб.';
divProduct.appendChild(productName);
var buttonBy = document.createElement('button'); buttonBy.className = 'button-by';
buttonBy.setAttribute('data-id', 'p001');
buttonBy.textContent = 'Купить';
divProduct.appendChild(buttonBy);

//второй элемент каталога
var divProduct = document.createElement('div'); divProduct.className = 'product';
divItem.appendChild(divProduct);
divProduct.innerHTML = '<img src="https://www.fillmurray.com/150/150" alt=""> ';
var productName = document.createElement('p'); productName.textContent = product[1].name;
divProduct.appendChild(productName);
var productName = document.createElement('p'); productName.textContent = 'Цена ' + product[1].price + ' руб.';
divProduct.appendChild(productName);
var buttonBy = document.createElement('button'); buttonBy.className = 'button-by';
buttonBy.setAttribute('data-id', 'p002');
buttonBy.textContent = 'Купить';
divProduct.appendChild(buttonBy);

//третий элемент каталога
var divProduct = document.createElement('div'); divProduct.className = 'product';
divItem.appendChild(divProduct);
divProduct.innerHTML = '<img src="https://www.fillmurray.com/150/150" alt=""> ';
var productName = document.createElement('p'); productName.textContent = product[2].name;
divProduct.appendChild(productName);
var productName = document.createElement('p'); productName.textContent = 'Цена ' + product[2].price + ' руб.';
divProduct.appendChild(productName);
var buttonBy = document.createElement('button'); buttonBy.className = 'button-by';
buttonBy.setAttribute('data-id', 'p003');
buttonBy.textContent = 'Купить';
divProduct.appendChild(buttonBy);

//корзина
var basket = [];

var divBasket = document.createElement('div'); divBasket.className = 'basket';
document.body.appendChild(divBasket);
var basketName = document.createElement('h4'); basketName.textContent = 'Ваша корзина:';
divBasket.appendChild(basketName);

//отслеживание клика
document.onclick = event => {
    //console.log(event.target.classList);
    if (event.target.classList.contains('button-by')) {
        // console.log(event.target.dataset.id);
        addProduct(event.target.dataset.id);
    };
};

//добавление товара в корзине
function addProduct(id){
    switch (id) {
        case 'p001':
            basket.push(product[0]);
            break;
        case 'p002':
            basket.push(product[1]);
            break;
        case 'p003':
            basket.push(product[2]);
            break;

    };

};


//подсчет корзины
var basketPrice = 0;
function totalBasketPrice() {
    for (i=0; i<basket.length; i++) { 
        basketPrice = basketPrice + basket[i].price;
    }
    return basketPrice;
};

//вывод корзины
document.write('<h3>В корзине:</h3>');
for (i=0;i<basket.length;i++){
    document.write(basket[i].name + ' — ' + basket[i].price +' руб</br>');
}
document.write('</br><b>Стоимость заказа: '+totalBasketPrice(basket)+'</b>');


