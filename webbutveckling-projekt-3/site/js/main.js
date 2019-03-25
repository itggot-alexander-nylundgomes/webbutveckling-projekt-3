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