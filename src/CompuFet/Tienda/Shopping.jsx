import React, { useEffect } from 'react';
// import $ from 'jquery';
// import Img1 from './../compufetimages/com1fet.jpg';
import Img10 from './../compufetimages/comfet58.svg';
// import { Link } from 'react-router-dom';

function Shopping() {

    useEffect(() => {

        let openShopping = document.querySelector('.cart-shopping');
        let closeShopping = document.querySelector('.closeShopping');
        let body = document.querySelector('.body005');
        let list = document.querySelector('.list001');
        let listCard = document.querySelector('.listcard-shop');
        let total = document.querySelector('.total-shop');
        let quantity = document.querySelector('.cantidad-shopping');

        if (openShopping !== null && body !== null) {

            openShopping.addEventListener('click', () => {
                body.classList.add('active');
            });
        }

        if (closeShopping !== null && body !== null) {
            closeShopping.addEventListener('click', () => {
                body.classList.remove('active');
            });
        }
        let products = [
            {
                id: 1,
                name: 'PRODUCT NAME 1',
                image: 'com1fet.jpg',
                price: 1200000
            },
            {
                id: 2,
                name: 'PRODUCT NAME 2',
                image: 'com1fet.jpg',
                price: 120000
            },
            {
                id: 3,
                name: 'PRODUCT NAME 3',
                image: 'com1fet.jpg',
                price: 220000
            },
            {
                id: 4,
                name: 'PRODUCT NAME 4',
                image: 'com1fet.jpg',
                price: 123000
            },
            {
                id: 5,
                name: 'PRODUCT NAME 5',
                image: 'com1fet.jpg',
                price: 320000
            },
            {
                id: 6,
                name: 'PRODUCT NAME 6',
                image: 'com1fet.jpg',
                price: 120000
            }
        ];

        const variables = Object.keys(products);
        console.log(variables);
        if (list) {
            
            let listCards = [];
            function initApp() {
                products.forEach((value, key) => {
                    let newDiv = document.createElement('div');
                    newDiv.classList.add('item-shop');
                    newDiv.innerHTML = `
                    <img class="img-shop003" src="./../compufetimages/${value.image}">
                    <div class="title-shop">${value.name}</div>
                    <div class="price-shop">${value.price.toLocaleString()}</div>
                    <button class="btn-shop001" onclick="addToCard(${key})">Add To Card</button>`;
                    list.appendChild(newDiv);
                });
            }
            initApp();

            
            // function addToCard(key) {
            //     // console.log("products", products);
            //     // console.log("key", key);
            //     // console.log("products[key]", products[key]);
            //     // console.log("listCards", listCards);
            //     if (listCards[key] == null) {
            //         // copy product form list to list card
            //         listCards[key] = JSON.parse(JSON.stringify(products[key]));
            //         listCards[key].quantity = 1;
            //     }
            //     reloadCard();
            // }addToCard();
            

            // function reloadCard(listCards) {

            //     listCard.innerHTML = '';
            //     let count = 0;
            //     let totalPrice = 0;
            //     listCards.forEach((value, key) => {
            //         totalPrice = totalPrice + value.price;
            //         count = count + value.quantity;
            //         if (value != null) {
            //             let newDiv = document.createElement('li');
            //             newDiv.innerHTML = `
            //             <div><img class="img-shop004" src="image/${value.image}"/></div>
            //             <div>${value.name}</div>
            //             <div>${value.price.toLocaleString()}</div>
            //             <div>
            //                 <button class="btn-shop002" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            //                 <div class="count-shop" >${value.quantity}</div>
            //                 <button class="btn-shop002" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            //             </div>`;
            //             listCard.appendChild(newDiv);
            //         }
            //     })
            //     total.innerText = totalPrice.toLocaleString();
            //     quantity.innerText = count;
            // }
            
            // function changeQuantity(key, quantity){
            //     if(quantity == 0){
            //         delete listCards[key];
            //     }else{
            //         listCards[key].quantity = quantity;
            //         listCards[key].price = quantity * products[key].price;
            //     }
            //     reloadCard();
            // }
        }
    }, []);

    // https://www.youtube.com/watch?v=9VsYmXXQPv0
    // Filtro de busqueda. aqui abajo
    // https://www.youtube.com/watch?v=UH7Xtn4J5ZM
    // Hacer abajo
    // https://github.com/HoanghoDev/addtocardv2
    // https://www.youtube.com/watch?v=bCTd1eRX7Iw

    return (
        <div>
            <div className='body005'>

                <div className='container-shop'>
                    <div className="header-shop">
                        <h1>Escoge un producto</h1>
                        <div className="cart-shopping">
                            <img className='img010' src={Img10} />
                            <span className='cantidad-shopping'>0</span>
                        </div>
                    </div>
                    <div className='list001'></div>
                </div>
                <div className="card-shop">
                    <h1 className="h1-shop1">Card</h1>
                    <ul className="listcard-shop">
                    </ul>
                    <div className="checkOut-shop">
                        <div className="total-shop">0</div>
                        <div className="closeShopping">Cerrar</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shopping

// https://www.youtube.com/watch?v=UH7Xtn4J5ZM
// https://www.youtube.com/watch?v=AF6vGYIyV8M

// https://www.youtube.com/watch?v=18Jvyp60Vbg
// https://www.youtube.com/watch?v=2YvMUrJQuRk
// https://www.youtube.com/watch?v=3vYsl8GzEms

// https://www.youtube.com/watch?v=bCTd1eRX7Iw
// https://github.com/HoanghoDev/addtocardv2/blob/main/app.js
// https://www.youtube.com/watch?v=b7uytYTpKos
// https://www.youtube.com/watch?v=EEcY-gmrh10