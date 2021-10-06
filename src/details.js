import {http} from "./http.js";
import {ui} from "./ui.js";




const productsURL = "https://61363d2f8700c50017ef54d2.mockapi.io/products?id=";




window.onload =()=>{
	let searchParamString = window.location.search;

    const searchParam =new URLSearchParams(searchParamString);
    const id = searchParam.get('id')
    console.log(id)
    http.get(productsURL + id).then((data)=>{
        ui.showDetails(data)

         
        let cart = JSON.parse(localStorage.getItem("cart"));
            if(!cart){
              cart=[]
              localStorage.setItem("cart",JSON.stringify(cart))
            }

       const addToCartBtn = document.getElementById("addToCart");
      

        addToCartBtn.addEventListener("click", (e)=>{
         
            const productId = document.getElementById("product-id").innerHTML;
            const productName = document.getElementById("product-name").innerHTML;
            const productPrice = document.getElementById("product-price").innerHTML;
            const productQty = document.getElementById("quantity").value;
            console.log(productQty)
           
            
    
            const product = {
                id: productId,
                name: productName,
                price : productPrice,
                quantity : productQty,
                
            };
             //check if stored value is an array
            if(!(cart instanceof Array))
            cart = [cart]
            cart.push(product)
            localStorage.setItem("cart", JSON.stringify(cart))
            alert("Product added to the cart!")
        });
        // ui.banner()
         
      

    

    }); 
    
   
   
}














