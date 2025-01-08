// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items in the cart section
function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");
    cartItemsContainer.innerHTML = ""; // Clear previous items

    let total = 0;
    cart.forEach((item, index) => {
        const itemSubtotal = item.price * item.quantity;
        total += itemSubtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><button class="remove-item" data-index="${index}">X</button></td>
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>${item.name} (Size: ${item.size})</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" class="cart-quantity" data-index="${index}" value="${item.quantity}" min="1">
            </td>
            <td>$${itemSubtotal.toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(row);
    });

    cartTotalEl.innerText = `$${total.toFixed(2)}`;

    // Attach event listeners to remove buttons and quantity inputs
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1); // Remove item from cart
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
        });
    });

    document.querySelectorAll(".cart-quantity").forEach(input => {
        input.addEventListener("change", (e) => {
            const index = e.target.dataset.index;
            const newQuantity = parseInt(e.target.value);

            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCartItems();
            } else {
                alert("Quantity must be at least 1.");
                renderCartItems();
            }
        });
    });
}

// Render cart items on page load
renderCartItems();
