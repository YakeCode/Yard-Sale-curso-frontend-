const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const menucarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const shoppingCartContainer = document.querySelector(`#shoppingCartContainer`);
const cardsContainer = document.querySelector(`.cards-container`);


menuEmail.addEventListener('click', toggledesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menucarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);


function toggledesktopMenu(){

    const isshoppingCartContainerMenuClosed = shoppingCartContainer.classList.contains(`inactive`);
    
    if (!isshoppingCartContainerMenuClosed){
        shoppingCartContainer.classList.add(`inactive`);
    }

    desktopMenu.classList.toggle('inactive')
};

function togglemobileMenu(){

    const isshoppingCartContainerMenuClosed = shoppingCartContainer.classList.contains(`inactive`);
    
    if (!isshoppingCartContainerMenuClosed){
        shoppingCartContainer.classList.add(`inactive`);
    }

    mobileMenu.classList.toggle('inactive')
};

function toggleCarritoshoppingCartContainer(){

    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add(`inactive`);
    };

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add(`inactive`);
    };
    
    shoppingCartContainer.classList.toggle(`inactive`);
    
};

/* lista de productos array*/ 

const productList = [] ;
productList.push({
    name: `Bike`,
    price: 120,
    image:`https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `pantalla`,
    price: 220,
    image:`https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `compu`,
    price: 520,
    image:`https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});

/* maquetacion para crear el html para el array */

/* el HTML original
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
 */

function renderProducts(arr){
    for(product of arr){

        /*se crea un div con la clase product-card */
        const productCard = document.createElement(`div`)
        productCard.classList.add(`product-card`);

        /*este le envia la imagen a el producto de productList */
        const productImg = document.createElement(`img`)
        productImg.setAttribute(`src`, product.image);
    
        /*se crea un div con la clase */
        const productInfo= document.createElement(`div`)
        productInfo.classList.add(`product-info`);
    
        /*se crea un div que va a contener price y name del productlist*/
        const productInfoDiv = document.createElement(`div`);
    
        const productPrice = document.createElement(`p`)
        productPrice.innerText = `$ ` + product.price;
    
        const productName = document.createElement(`p`)
        productName.innerText = product.name;
    
        /*con appendChild ordenamos que contenedor va a ir dentro de que siguiendo el HTML original */
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement(`figure`);
        const productImgCard = document.createElement(`img`)
        productImgCard.setAttribute(`src` , `./icons/bt_add_to_cart.svg` );
    
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
       
    };    
};
/* ejecuta la funcion que envia los productos a productList*/
renderProducts(productList);