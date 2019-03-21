function a_menu(){
    burger_menu = document.querySelector(".burger_menu")
    burger_menu.classList.toggle("a_burger_menu")
} 

function goBack(){
    window.history.back();
}

function cart_click(event){
    variab = event.target
   
    if (variab.innerHTML === "add_shopping_cart"){
        variab.innerHTML = "remove_shopping_cart"
    }
    else{
        variab.innerHTML = "add_shopping_cart"
    }
}

function registerCartIconClick(cartIcon){
    cartIcon.addEventListener("click", cart_click)
}

function registerBuyBoxClick(product_window){
    product_window.addEventListener("click", add_to_order)
}

cartIcons = document.querySelectorAll(".carticons")
cartIcons.forEach(registerCartIconClick)
