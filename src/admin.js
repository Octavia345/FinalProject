import { http } from "./http.js";
import { ui } from "./ui.js";

document.addEventListener("DOMContentLoaded", getProductsForAdminPage);

const productsURL = "https://61363d2f8700c50017ef54d2.mockapi.io/products";

function getProductsForAdminPage(){
    http.get(productsURL).then((products)=>{
        ui.showAdminProducts(products)
    })
}

//Add Product Btn

const addProductBtn = document.getElementById("addProduct");

addProductBtn.addEventListener("click" , addProductToDB);

function addProductToDB(){
    const name = document.getElementById("name").value;
    const image = document.getElementById("picture").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const quantity = document.getElementById("quantity").value;

    let product = {
        name : name,
        image: image,
        price: price,
        category: category,
        description: description,
        quantity: quantity,
    }

    http.post(productsURL,product).then((product)=>{getProductsForAdminPage()})
    clearFields();
}

function clearFields() {
     document.getElementById("name").value="";
     document.getElementById("picture").value="";
     document.getElementById("price").value = "";
     document.getElementById("category").value="";
     document.getElementById("description").value = "";
     document.getElementById("quantity").value= "";
}

//Delete Btn

$('table').on('click', 'button[class="deleteBtnAdmin"]', function(event){
    $(this).closest('tr').remove();
    const id = event.target.id;
            console.log(id)

    fetch(productsURL +"/"+ id,{method:"DELETE",})
    .then((response) => response.json())
    .then((data)=>{console.log(data)})

})

