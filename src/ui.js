class UI {
	constructor() {
		this.productContainer = document.getElementById("products");
    this.detailsContainer = document.getElementById("detailsContainer")
    this.adminTbody = document.getElementById("adminTbody");
    this.id = document.getElementById('id');
		this.image = document.getElementById("picture");
		this.price = document.getElementById("price");
    this.currency = document.getElementById("currency");
		this.description= document.getElementById("description");
		this.category = document.getElementById("category");
		this.name = document.getElementById("name");
    this.quantity = document.getElementById("quantity");
	}



	showProducts(products) {
		let output = "";
		products.forEach((product) => {
		  output += ` 
			 <div class="card m-3" style="width: 20%;">
				<div class="card-body">
				   <img src="${product.picture}" alt="sample">
				   <h5 class="product-name" style="font-family: 'Linotype Didot';font-style: italic; ">${product.name}</h5>
				   <p class="product-price">${product.price} ${product.currency}</p>
				   <a class="btn btn-dark"  onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</a>
				</div>
			 </div>
			 `;
		  this.productContainer.innerHTML = output;
		});
	  }

	  
  showProductClassic(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "Tea") {
        output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
		
      }
	  console.log(output)
    });
  }
 

  showPremiumProducts(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "Premium Tea") {
        output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
      }
    });
  }

  showAccesories(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "Accsesories") {
        output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
      }
    });
  }

  

  showDetails(product){
    let output="";
    output +=`
    <div class="row">
    <div class="col-md-6 mb-4">

      <div id="mdb-lightbox-ui"></div>

      <div class="mdb-lightbox">

        <div class="row product-gallery">

          <div class="col-7 mb-0 ">
            <figure class="view overlay rounded z-depth-1 main-img">
              <a href="${product[0].image}"
                data-size="710x823">
                <img src="${product[0].image}"
                  class="z-depth-5">
              </a>
            </figure>
          </div> 
        </div>

      </div>

    </div>
    <div class="col-4 description">

      <h5 id="product-name" style="font-family: 'Linotype Didot';font-style: italic;font-weight: normal; font-size: 2rem">${product[0].name}</h5>
      <p id="product-id">${product[0].id}</p>
      <p><span class="mr-1" ><strong id="product-price">${product[0].price} ${product[0].currency}</strong></span></p>
      <p class="pt-1">${product[0].description}</p>
  
      <hr>
      <div class="table-responsive mb-2">
        <table class="table table-sm table-borderless">
          <tbody>
            <tr>
              <td class="pl-0 pb-0 w-25">Quantity</td>
            </tr>
            <tr>
              <td class="pl-0">
                <div class="def-number-input number-input mb-0">
                  
                  <input id="quantity" min="1" max="${product[0].quantity}" value="1" type="number">
                
                </div>
                <div class="stock mt-3">Stock: ${product[0].quantity}</div>
              </td>
          
            </tr>
          </tbody>
        </table>
      </div>
      
    
      <button  class="btn btn-dark btn-md mr-1 mb-2"   id="addToCart">Add to cart</button>
    </div>
  </div>`;
    this.detailsContainer.innerHTML = output;
  }

  showAdminProducts(products){
    let output ="";
    products.forEach((product)=>{
      output += `
      <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.category}</td>
      <td>${product.quantity}</td>
      <td><button type="button" class="editBtn"><i class="fa fa-pencil"></i></button></td>
      <td><button type="button" class="deleteBtnAdmin"><i class="fa fa-trash" id="${product.id}"></i></button></td>
      </tr>
      `
    });
    this.adminTbody.innerHTML = output;
   

  }

  updateCartIcon() {
    const productsIdArr = JSON.parse(localStorage.getItem("cart"));
    let counter = 0;
    for (let i = 0; i < productsIdArr.length + 1; i++) {
      this.cartIcon.innerHTML = counter++;
    }
    // console.log(counter);
  }
}

export const ui = new UI();



// Slider function
// $(document).ready(function() {
//     var slider = $("#lightSlider").lightSlider();
//     slider.goToSlide(3);
//     slider.goToPrevSlide();
//     slider.goToNextSlide();
//     slider.getCurrentSlideCount();
//     slider.refresh();
//     slider.play(); 
//     slider.pause();    
//   });