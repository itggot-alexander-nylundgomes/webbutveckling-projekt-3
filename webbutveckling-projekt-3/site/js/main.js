function a_menu(){
    burger_menu = document.querySelector(".burger_menu")
    burger_menu.classList.toggle("a_burger_menu")
    monacle = document.getElementById("menu")
    
    if (monacle.innerHTML === "menu"){
        monacle.innerHTML = "chevron_left"
    }
    else{
        monacle.innerHTML = "menu"
    }
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

cartIcons = document.querySelectorAll(".carticons")
cartIcons.forEach(registerCartIconClick)



function product_to_cart(){
    active = document.querySelector(".product_add")
    active.classList.toggle("product_add_a")

    size_for_text = document.querySelector(".product_add_text")
    size_for_text.classList.toggle("product_add_text_a")

    text_active = document.querySelector(".product_add_text")
    
    if (text_active.innerHTML === "Remove From <br> Cart"){
        text_active.innerHTML = "Add To Cart"
    }
    else{
        text_active.innerHTML = "Remove From <br> Cart"
    }
}
