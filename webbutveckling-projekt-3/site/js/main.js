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
