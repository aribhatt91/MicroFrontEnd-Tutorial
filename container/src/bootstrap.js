import {mount as productsMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/Cart';


console.log('Container Bootstrap');

productsMount(document.getElementById('app-products'));
cartMount(document.getElementById('app-cart'));