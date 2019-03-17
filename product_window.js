function new_product(){
    div = document.createElement("div")
    div.classList.add("buy_box")
    div.id = "new"
    document.getElementById("products").appendChild(div)

    cart_box = document.createElement("div")
    cart_box.classList.add("cart_box")
    cart_box.id = "cart_box"
    document.getElementById("new").appendChild(cart_box)

    mI = document.createElement("i")
    mI.classList.add("material-icons")
    mI.classList.add("carticons")
    mI.id = "mI"
    textCart = document.createTextNode("add_shopping_cart");
    mI.appendChild(textCart);
    document.getElementById("cart_box").appendChild(mI)

    price_box = document.createElement("div")
    price_box.classList.add("price_box")
    price_box.id = "price_box"
    



}