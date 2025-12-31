// Product data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 89.99,
        rating: 4.5,
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        name: "Classic Denim Jacket",
        category: "clothing",
        price: 59.99,
        rating: 4.2,
        description: "Premium denim jacket with a modern fit and comfortable wear.",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        name: "Smart Home Assistant",
        category: "electronics",
        price: 129.99,
        rating: 4.8,
        description: "Voice-controlled smart assistant with integrated home automation features.",
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4,
        name: "Ceramic Coffee Mug Set",
        category: "home",
        price: 34.99,
        rating: 4.6,
        description: "Set of 4 beautifully crafted ceramic mugs with ergonomic handles.",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 5,
        name: "Running Shoes",
        category: "sports",
        price: 79.99,
        rating: 4.4,
        description: "Lightweight running shoes with advanced cushioning technology.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 6,
        name: "Best-Seller Novel",
        category: "books",
        price: 14.99,
        rating: 4.7,
        description: "Award-winning fiction novel that has captivated millions of readers.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 7,
        name: "Ultra HD Smart TV",
        category: "electronics",
        price: 699.99,
        rating: 4.9,
        description: "65-inch 4K smart TV with HDR and built-in streaming apps.",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 8,
        name: "Yoga Mat",
        category: "sports",
        price: 29.99,
        rating: 4.3,
        description: "Non-slip yoga mat with extra cushioning for comfortable practice.",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 9,
        name: "Air Fryer",
        category: "home",
        price: 119.99,
        rating: 4.5,
        description: "Digital air fryer with multiple cooking functions and easy-clean basket.",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 10,
        name: "Designer T-Shirt",
        category: "clothing",
        price: 24.99,
        rating: 4.0,
        description: "Premium cotton t-shirt with unique graphic design and comfortable fit.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 11,
        name: "Cookbook Collection",
        category: "books",
        price: 39.99,
        rating: 4.8,
        description: "Beautifully illustrated cookbook with 100+ recipes from around the world.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 12,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 49.99,
        rating: 4.6,
        description: "Waterproof portable speaker with 360-degree sound and 15-hour battery.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categoryFilters = document.querySelectorAll('.category-filter');
const priceFilter = document.getElementById('priceFilter');
const priceValue = document.getElementById('priceValue');
const ratingFilters = document.querySelectorAll('input[name="rating"]');
const clearFiltersBtn = document.getElementById('clearFilters');
const sortSelect = document.getElementById('sortSelect');
const filteredCount = document.getElementById('filteredCount');
const totalCount = document.getElementById('totalCount');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// State variables
let filteredProducts = [...products];
let selectedCategories = Array.from(categoryFilters).filter(cb => cb.checked).map(cb => cb.value);
let maxPrice = parseInt(priceFilter.value);
let minRating = 1;

// Initialize the page
function init() {
    displayProducts(products);
    updateProductCounts();
    updatePriceDisplay();
    
    // Event Listeners
    searchButton.addEventListener('click', filterProducts);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterProducts();
    });
    
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
    
    priceFilter.addEventListener('input', updatePriceDisplay);
    priceFilter.addEventListener('change', filterProducts);
    
    ratingFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            const selectedRating = document.querySelector('input[name="rating"]:checked');
            minRating = selectedRating ? parseInt(selectedRating.value) : 1;
            filterProducts();
        });
    });
    
    clearFiltersBtn.addEventListener('click', clearFilters);
    
    sortSelect.addEventListener('change', sortProducts);
    
    closeModal.addEventListener('click', () => {
        productModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productModal.style.display === 'flex') {
            productModal.style.display = 'none';
        }
    });
}

// Display products in grid
function displayProducts(productsArray) {
    productsGrid.innerHTML = '';
    
    if (productsArray.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <h3 style="font-size: 24px; color: #2c3e50; margin-bottom: 15px;">No products found</h3>
                <p style="color: #7f8c8d; font-size: 16px;">Try adjusting your filters or search terms</p>
                <button id="resetFiltersBtn" style="margin-top: 20px; padding: 12px 30px; background: #4cd964; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Reset All Filters</button>
            </div>
        `;
        
        document.getElementById('resetFiltersBtn')?.addEventListener('click', clearFilters);
        return;
    }
    
    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        productCard.setAttribute('data-price', product.price);
        productCard.setAttribute('data-rating', product.rating);
        
        const stars = getStarRating(product.rating);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-category">${product.category}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-value">${product.rating}</span>
                </div>
                <div class="product-price">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        // Add click event to open product details
        productCard.addEventListener('click', (e) => {
            // Don't open modal if clicking the Add to Cart button
            if (!e.target.closest('.add-to-cart')) {
                openProductModal(product);
            }
        });
        
        // Add to cart button event
        const addToCartBtn = productCard.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });
        
        productsGrid.appendChild(productCard);
    });
}

// Get star rating HTML
function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '★';
        } else if (i === fullStars && hasHalfStar) {
            stars += '½';
        } else {
            stars += '☆';
        }
    }
    
    return stars;
}

// Update price display
function updatePriceDisplay() {
    maxPrice = parseInt(priceFilter.value);
    priceValue.textContent = `$0 - $${maxPrice}`;
}

// Filter products based on filters and search
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // Get selected categories
    selectedCategories = Array.from(categoryFilters)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Get minimum rating
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    minRating = selectedRating ? parseInt(selectedRating.value) : 1;
    
    // Filter products
    filteredProducts = products.filter(product => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);
        
        // Category filter
        const matchesCategory = selectedCategories.length === 0 || 
            selectedCategories.includes(product.category);
        
        // Price filter
        const matchesPrice = product.price <= maxPrice;
        
        // Rating filter
        const matchesRating = product.rating >= minRating;
        
        return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
    
    // Sort products
    sortProducts();
    
    // Update product counts
    updateProductCounts();
}

// Sort products
function sortProducts() {
    const sortValue = sortSelect.value;
    
    switch(sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Default sorting (by id)
            filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    displayProducts(filteredProducts);
}

// Clear all filters
function clearFilters() {
    // Reset category filters
    categoryFilters.forEach(cb => {
        cb.checked = true;
    });
    
    // Reset price filter
    priceFilter.value = 1000;
    updatePriceDisplay();
    
    // Reset rating filter
    ratingFilters.forEach(rb => {
        if (rb.value === '1') rb.checked = true;
        else rb.checked = false;
    });
    
    // Reset search
    searchInput.value = '';
    
    // Reset sort
    sortSelect.value = 'default';
    
    // Reset state variables
    selectedCategories = Array.from(categoryFilters).filter(cb => cb.checked).map(cb => cb.value);
    maxPrice = parseInt(priceFilter.value);
    minRating = 1;
    
    // Reset products
    filteredProducts = [...products];
    sortProducts();
    updateProductCounts();
}

// Update product counts display
function updateProductCounts() {
    filteredCount.textContent = filteredProducts.length;
    totalCount.textContent = products.length;
}

// Open product modal
function openProductModal(product) {
    const stars = getStarRating(product.rating);
    
    modalBody.innerHTML = `
        <div class="modal-product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-product-details">
            <h3>${product.name}</h3>
            <span class="modal-product-category">${product.category}</span>
            <p class="modal-product-description">${product.description}</p>
            <div class="modal-product-rating">
                <div class="modal-stars">${stars}</div>
                <span class="modal-rating-value">${product.rating}/5.0</span>
            </div>
            <div class="modal-product-price">$${product.price.toFixed(2)}</div>
            <div class="modal-actions">
                <button class="modal-add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="modal-buy-now" data-id="${product.id}">
                    <i class="fas fa-bolt"></i> Buy Now
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners for modal buttons
    const modalAddToCartBtn = modalBody.querySelector('.modal-add-to-cart');
    const modalBuyNowBtn = modalBody.querySelector('.modal-buy-now');
    
    modalAddToCartBtn.addEventListener('click', () => {
        addToCart(product.id);
        // Optional: Show confirmation message
        showNotification(`${product.name} added to cart!`);
    });
    
    modalBuyNowBtn.addEventListener('click', () => {
        addToCart(product.id);
        showNotification(`Purchasing ${product.name}... Redirecting to checkout!`);
        // In a real app, you would redirect to checkout page
    });
    
    productModal.style.display = 'flex';
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // In a real app, you would update cart state and localStorage
    // For this demo, we'll just update the cart count
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent) || 0;
    count++;
    cartCount.textContent = count;
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
    
    // Add animation to cart icon
    const cartIcon = document.querySelector('.fa-shopping-cart');
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

// Show notification
function showNotification(message) {
    // Remove existing notification if present
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4cd964;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add keyframe animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 500);
    }, 3000);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);