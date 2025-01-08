const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Extract the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Mock product data
const products = {
    1: {
        category: "T-Shirt",
        name: "Cartoon Astronaut T-Shirts",
        price: "$7.8",
        description: "High-quality cotton t-shirt, perfect for daily wear.",
        images: ["/img/products/f1.jpg", "/img/products/f2.jpg", "/img/products/f3.jpg", "/img/products/f4.jpg"],
        sizes: ["Small", "Medium", "Large", "XL", "XXL"]
    },
    2: {
        category: "T-Shirt",
        name: "Cartoon Astronaut T-Shirts",
        price: "$8.0",
        description: "Comfortable and stylish, ideal for casual outings.",
        images: ["/img/products/f2.jpg", "/img/products/f3.jpg", "/img/products/f4.jpg", "/img/products/f1.jpg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    3: {
        category: "T-Shirt",
        name: "Casual White T-Shirt",
        price: "$7.0",
        description: "Comfortable and stylish, ideal for casual outings.",
        images: ["/img/products/f3.jpg", "/img/products/f4.jpg", "/img/products/f2.jpg", "/img/products/f1.jpg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    4: {
        category: "T-Shirt",
        name: "Casual White T-Shirt",
        price: "$7.5",
        description: "Soft and breathable fabric, suitable for all seasons.",
        images: ["/img/products/f4.jpg", "/img/products/f1.jpg", "/img/products/f2.jpg", "/img/products/f3.jpg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    5: {
        category: "T-Shirt",
        name: "Cartoon Astronaut T-Shirts",
        price: "$6.7",
        description: "Soft and breathable fabric, suitable for all seasons.",
        images: ["/img/products/f5.jpg", "/img/products/F5a.jpeg", "/img/products/F5b.jpeg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    6: {
        category: "Men's Casual Shirts Korean",
        name: "Cartoon Astronaut T-Shirts",
        price: "$9.2",
        description: "Men's Casual Shirts Korean Fashion Men Street Loose Tops Pockets Cotton Contrast Color Patchwork Shirt Mens Long Sleeve",
        images: ["/img/products/f6.jpg", "/img/products/F6a.jpeg", "/img/products/F6b.jpeg", "/img/products/F6c.jpeg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    7: {
        category: "Women-Trauser",
        name: "Flower Garden Linen Trouser",
        price: "$6.0",
        description: "Elevate your style with these elegant floral embroidered straight trousers featuring a sophisticated solid rust flat piping. A perfect blend of timeless charm and contemporary design",
        images: ["/img/products/f7.jpg", "/img/products/F7a.jpeg", "/img/products/F7b.jpeg", "/img/products/F7c.jpeg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    8: {
        category: "Women-Top",
        name: "Western top for women",
        price: "$6.0",
        description: "Elevate your style with these elegant floral embroidered straight trousers featuring a sophisticated solid rust flat piping. A perfect blend of timeless charm and contemporary design",
        images: ["/img/products/f8.jpg", "/img/products/F8a.jpeg", "/img/products/F8b.jpg", "/img/products/f8c.jpeg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    9: {
        category: "Shirt",
        name: "Men simple plane shirt",
        price: "$7.8",
        description: "Blue solid casual shirt, has a band collar, button placket, long regular cuffed sleeves, and a curved hem",
        images: ["/img/products/n1.jpg", "/img/products/n2.jpg", "/img/products/n3.jpg", "/img/products/n5.jpg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    10: {
        category: "Shirt",
        name: "Men simple plane shirt",
        price: "$8.0",
        description: "Blue solid casual shirt, has a band collar, button placket, long regular cuffed sleeves, and a curved hem",
        images: ["/img/products/n2.jpg", "/img/products/n1.jpg", "/img/products/n3.jpg", "/img/products/n5.jpg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    11: {
        category: "Shirt",
        name: "Men simple plane shirt",
        price: "$7.0",
        description: "Blue solid casual shirt, has a band collar, button placket, long regular cuffed sleeves, and a curved hem",
        images: ["/img/products/n3.jpg", "/img/products/n5.jpg", "/img/products/n2.jpg", "/img/products/n1.jpg", ],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    12: {
        category: "T-Shirt",
        name: "Men Premium T-shirt",
        price: "$7.0",
        description: "A primium class of t-shirt for men. Cool and confortable for any season",
        images: ["/img/products/n4.jpg", "/img/products/n4a.jpeg", "/img/products/n4b.jpeg", "/img/products/n1.jpg", ],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    13: {
        category: "Shirt",
        name: "Men simple plane shirt",
        price: "$6.0",
        description: "Blue solid casual shirt, has a band collar, button placket, long regular cuffed sleeves, and a curved hem",
        images: ["/img/products/n5.jpg", "/img/products/n2.jpg", "/img/products/n3.jpg", "/img/products/n1.jpg", ],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    14: {
        category: "Pant",
        name: "MEN LINEN SHORTS (30, SKY BLUE)",
        price: "$6.0",
        description: "Shorts in a striped cotton weave with an extended waistband with a button, an adjustable tab and button at the sides and a zip fly. Side pockets, welt back pockets with a button and slim legs with creases. Slim Fit.",
        images: ["/img/products/n6.jpg", "/img/products/n6a.jpeg", "/img/products/n6b.jpeg", "/img/products/n6c.jpeg", ],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    15: {
        category: "Shirt",
        name: "Men Cargo stylish shirt",
        price: "$6.0",
        description: "A primium class of shirt for men. Cool and confortable for any season",
        images: ["/img/products/n7.jpg", "/img/products/n7b.webp", "/img/products/n7c.avif", "/img/products/n7a.jpeg"],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
    16: {
        category: "Colaar Short",
        name: "Collar Short Sleeve Shirt",
        price: "$6.0",
        description: "Modal Cotton Stand Collar Short Sleeve Shirt. Cool and confortable for any season",
        images: ["/img/products/n8.jpg", "/img/products/n8a.avif", "/img/products/n8c.avif", "/img/products/n8.jpg", ],
        sizes: ["Small", "Medium", "Large", "XL"]
    },
}; 


const product = products[productId];

if (product) {
    document.getElementById("MainImg").src = product.images[0];

    const smallImgGrp = document.getElementById("SmallImages");
    product.images.forEach((imgSrc) => {
        const imgCol = document.createElement("div");
        imgCol.classList.add("small-img-col");
        imgCol.innerHTML = `<img src="${imgSrc}" width="100%" class="small-img" alt="Product Image">`;
        smallImgGrp.appendChild(imgCol);
    });

    const smallImgs = document.querySelectorAll(".small-img");
    smallImgs.forEach((img, index) => {
        img.addEventListener("click", () => {
            document.getElementById("MainImg").src = product.images[index];
        });
    });

    document.getElementById("product-category").innerText = `Home / ${product.category}`;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-description").innerText = product.description;

    const sizeDropdown = document.getElementById("product-sizes");
    product.sizes.forEach((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.innerText = size;
        sizeDropdown.appendChild(option);
    });

    document.getElementById("addToCart").addEventListener("click", () => {
        addToCart(product);
    });
} else {
    document.getElementById("prodetails").innerHTML = "<h2>Product not found.</h2>";
}

// Cart array stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to handle Add to Cart
function addToCart(product) {
    const quantityInput = document.querySelector("input[type='number']");
    const quantity = parseInt(quantityInput?.value || 1);

    // Check if product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.name === product.name);

    if (existingProductIndex !== -1) {
        // Update quantity if product exists
        cart[existingProductIndex].quantity += quantity;
    } else {
        // Add new product to cart
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to the cart.`);
    updateCart();
}

// Function to update the cart UI
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = ""; // Clear existing cart items
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemSubtotal = parseFloat(item.price.slice(1)) * item.quantity;
        subtotal += itemSubtotal;

        // Create table row for each cart item
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><button onclick="removeItem(${index})">Remove</button></td>
            <td><img src="${item.images[0]}" alt="${item.name}" width="50"></td>
            <td>${item.name}</td>
            <td>$${parseFloat(item.price.slice(1)).toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>$${itemSubtotal.toFixed(2)}</td>
        `;
        cartItems.appendChild(row);
    });

    // Update subtotal and total
    cartSubtotal.innerText = `$${subtotal.toFixed(2)}`;
    cartTotal.innerText = `$${subtotal.toFixed(2)}`;
}

// Function to update quantity of an item
function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1); // Remove item from the cart array
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Initialize cart update if on cart page
if (document.getElementById("cart-items")) {
    document.addEventListener("DOMContentLoaded", updateCart);
}

// Checkout function (Optional)
function checkout() {
    alert("Proceeding to checkout...");
    // Implement further checkout logic here
}