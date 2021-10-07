"use strict"

document.addEventListener("DOMContentLoaded", ()=>{
  showProductsInCart()
  countTheTotal()

  

});

const message = document.getElementById("shopcartMessage");



 function showProductsInCart() {
	let cart = localStorage.getItem('cart');
  // console.log(cart)
	if (cart.length>0) {
		const cartObj = JSON.parse(cart);
		let output = `
      
         ${cartObj
						.map(
							(product) =>
								`
                <tr class="cartItem">
                <td><a href="details.html?id=${product.id}" id="productNameLink">${product.name}</a></td>
                <td>
                <button action="remove" class="qtyBtn mr-2" id="decrease" >-</button>
                <input class="quantity" onChange="countTheTotal()" id="quantityInput" type="number" name="quantity" value="${product.quantity}" max="" min="1"/>
                <button action="add" class="qtyBtn ml-2" id="increase" >+</button>
                </td>
                <td class="productPrice">${product.price}</td>
                <td></td>
                <td><button class="deleteProduct"><i class="fa fa-trash-alt" id="${product.id}"></i></button></td>
              </tr>`
              
						)
						.join('')}
          
      
      `;
		
		document.getElementById('cartContainer').innerHTML = output;
    
   
    countTheTotal()
    
	}
  else{
    const message = document.getElementById("shopcartMessage");

    message.innerHTML =` <h3 class="mb-0 text-light">Your shopping cart is empty!</h3>`
    cartTotal.innerHTML = "";
  }

}

$('table').on('click', 'button[class="deleteProduct"]', function(e){
 
   
  $(this).closest('tr').remove()
 
  const id = e.target.id;
 
  const cart = JSON.parse(localStorage.getItem("cart"));
 
   const removeIndex = cart.findIndex(item => item.id === id)
    cart.splice(removeIndex,1)
    localStorage.setItem("cart",JSON.stringify(cart))
      
    
  
   window.location.reload()
   countTheTotal()
})







 function countTheTotal(){
  let total = 0 ;
  let cart = JSON.parse(localStorage.getItem("cart"));
 
  cart.forEach(item => {
    // let qty = document.getElementById("quantityInput").value;
    item.quantity = parseInt(item.quantity)
    // console.log(qty)
    if(item.quantity>0){
      item.price = parseFloat(item.price.replace("lei",""))
      
    total += item.price * item.quantity;
    }
    
  });
  const cartTotal = document.getElementById("cartTotal");
  cartTotal.innerText=total + " lei";
  console.log(total)
  
}  


// jQuery(function countTheTotal(){
 
//  let items = document.getElementsByClassName("cartItem");
//  let total = 0;
//  for(let i=0; i < items.length; i++){
//    let item = items[i];
//    let priceInLei = item.getElementsByClassName("productPrice")[0];
//    let price= parseFloat(priceInLei.innerText.replace("lei", ""))
//    let qtyElement =item.getElementsByClassName("quantity")[0];
//    let qty = qtyElement.value
//    total += price * qty;

  

//  }
//  const cartTotal = document.getElementById("cartTotal");
//  cartTotal.innerText = total + " lei";

//  inputChange()
// })



  // const plusBtn = document.getElementById("increase");
  // plusBtn.addEventListener("click", increase(e))
  // console.log(plusBtn)
  // function increase() {
  //   let products = JSON.parse(localStorage.getItem("cart"));
  //   for (let i = 0; i < products.length; i++) {
  //     let inputValue = document.getElementsByClassName("quantity").value;
  //     inputValue = products[i].quantity;
  //     inputValue = inputValue + 1;
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  //   window.location.reload();
  // }

// function decrease(){
//   let products = JSON.parse(localStorage.getItem("cart"));
//   for(let i = 0 ; i <products.length; i ++){
//     let inpuValue = document.getElementsByClassName("quantity").value;
//     inpuValue = products[i].quantity--;
//     localStorage.setItem("cart", JSON.stringify(cart))
//   }
//   window.location.reload()
// }









 

 

