import faker from 'faker';


const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    console.log(products);
    el.innerHTML = `<div>You have 5 products in your cart</div>` + products;
}



if(process.env.NODE_ENV === "development"){
    if(document.getElementById('cart-dev')){
        mount(document.getElementById('cart-dev'));
    }
   
}


export {mount};