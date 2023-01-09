
const cartBtn = document.getElementById("cart-btn");
const cartCount = document.getElementById("cart-count");
const homeBtn = document.getElementById("home-btn");
const itemsDiv = document.getElementById("items-div");


let itemsArray = [
    {
        id: 1,
        name: "Laptop",
        image: "https://th.bing.com/th/id/OIP.5EZRHGR0LgL2IWcQ511TkQHaF5?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        id: 2,
        name: "Mobile Phone",
        image: "https://th.bing.com/th/id/OIP.LQ-xwK6R2QV0YfCEycRBggHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        id: 3,
        name: "Tablet",
        image: "https://th.bing.com/th/id/OIP.6GslngEhP44lfi3V9rCqpgHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        id: 4,
        name: "Watch",
        image: "https://th.bing.com/th/id/OIP.lHfNQ4X4wti5VM-W0jtiawHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        id: 5,
        name: "TV",
        image: "https://th.bing.com/th/id/OIP.ZlunMSKwlsLi1PGa2WU2vwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
]

// function to map array items

function mappingItems(arr){
    itemsDiv.innerHTML = "";
    arr.forEach((item) => {
        itemsDiv.innerHTML += `<div id="item">
        <img src= ${item.image}>
        <h4>${item.name}</h4>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>`
    })
}


let cartArray = [];

// function to add an item to cart

function addToCart(id){
    itemsArray.forEach((item) => {
        if(item.id == id){
            cartArray.push(item);  
        }
    })
    cartCount.innerText = String(cartArray.length);
}



// function to show cart

function showCart(arr){
    itemsDiv.innerHTML = "";
    arr.forEach((item) => {
        itemsDiv.innerHTML += `<div id="item">
        <img src= ${item.image}>
        <h4>${item.name}</h4>
        <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>`
    })
}


// function to remove item from cart

function removeFromCart(id) {
    cartArray.forEach((item,index) => {
        if(item.id == id){
            cartArray.splice(index,1);
        }
    })
    showCart(cartArray);
    cartCount.innerText = String(cartArray.length);
}


// onclicking cartBtn

cartBtn.addEventListener("click", () => {
    showCart(cartArray);
});

// onclicking homeBtn

homeBtn.addEventListener("click", () => {
    mappingItems(itemsArray);
})




mappingItems(itemsArray);