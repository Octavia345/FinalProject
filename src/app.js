import {http} from "./http.js";
import {ui} from "./ui.js";

//Get products
const productsURL = "https://61363d2f8700c50017ef54d2.mockapi.io/products";


document.addEventListener("DOMContentLoaded", getProducts);

function getProducts() {
	http.get(productsURL).then((products) =>{
	ui.showProducts(products);
	ui.showProductClassic(products);
    ui.showPremiumProducts(products);
	ui.showAccesories(products)
} )
}


