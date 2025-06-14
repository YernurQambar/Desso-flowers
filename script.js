const products = [
    {
        id: 1,
        name: "Букет из красных роз",
        category: "roses",
        price: 8500,
        image: "https://shemonaiha.dostavka-cvetov365.kz/wp-content/uploads/2022/05/aktsiya-rozy-krasnye-51-sht.jpg",
    },
    {
        id: 2,
        name: "Белые Розы Elegance",
        category: "roses",
        price: 9200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcSCArQZNGtxfXqsH8IK6gVC8TFj8vTOmkA&s",
    },
    {
        id: 3,
        name: "Розовые Розы Garden",
        category: "roses",
        price: 7800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtqAX5PnXgjFg-B7nqJCz-7SWmoFKgTVhKg&s",
    },
    {
        id: 4,
        name: "Желтые Розы Sunshine",
        category: "roses",
        price: 8000,
        image: "https://pro-buket.kz/wp-content/uploads/2022/06/5300834162683419807-min.jpg",
    },
    {
        id: 5,
        name: "Фиолетовый Тюльпан Bunch",
        category: "tulips",
        price: 6500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Oj76Xn3DTysPwxodZpUwBfZjblJd77W63w&s",
    },
    {
        id: 6,
        name: "Красный Тюльпан Festival",
        category: "tulips",
        price: 7000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aT5_b-_wcUSStDM3OdA0Kr1siAQCp4bGbA&s",
    },
    {
        id: 7,
        name: "Белый Тюльпан Pure",
        category: "tulips",
        price: 6800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4YQSBIjc7P5IlratccaHspnp1CFW62ZzWw&s",
    },
    {
        id: 8,
        name: "Тюльпанный Микс Rainbow",
        category: "tulips",
        price: 8500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJ7BOPrmcfbp8lsAAB21V2pvN6VuMB0b8aQ&s",
    },
    {
        id: 9,
        name: "Оранжевые Лилии Flame",
        category: "lilies",
        price: 9500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DpE4gG9Cj4WWIT-0X_9YfkagLPHGLbkicw&s",
    },
    {
        id: 10,
        name: "Белые Лилии Angel",
        category: "lilies",
        price: 10200,
        image: "https://static.insales-cdn.com/images/products/1/5027/791065507/63a20380792b2852fc5bd603f3a9c72d.jpg",
    },
    {
        id: 11,
        name: "Розовые Лилии Blush",
        category: "lilies",
        price: 9800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosvcgAzn8x8-VToWXfZzGOKESovQKhZY0Tw&s",
    },
    {
        id: 12,
        name: "Желтые Лилии Bright",
        category: "lilies",
        price: 9000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6r2UUMbUUFR6CXi4TO8HXjk6-OWskM6M3qQ&s",
    },
    {
        id: 13,
        name: "Орхидеи Royal",
        category: "orchids",
        price: 15000,
        image: "https://venusinfleurs.ru/image/catalog/product/4193/4193_1.jpg",
    },
    {
        id: 14,
        name: "Орхидеи Grace",
        category: "orchids",
        price: 16500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLpba65zINgcK6gDIYFpx1Xf0TBgS748CXg&s",
    },
    {
        id: 15,
        name: "Розовые Орхидеи Dream",
        category: "orchids",
        price: 14800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7dIiSH42so53tzK5AnwBkkp1CihwTa125Q&s",
    },
    {
        id: 16,
        name: "Орхидеи Mystery",
        category: "orchids",
        price: 17000,
        image: "https://venusinfleurs.ru/image/catalog/product/4190/4190_1.jpg",
    },
    {
        id: 17,
        name: "Подсолнухи Giant",
        category: "sunflowers",
        price: 5500,
        image: "https://www.roza4u.ru/image/catalog/buket-podsolnuxi/IMG_3394.jpg",
    },
    {
        id: 18,
        name: "Мини Подсолнухи Bunch",
        category: "sunflowers",
        price: 4800,
        image: "https://www.roza4u.ru/image/cache/catalog/buket-podsolnuxi/IMG_3703-1400x1400.jpg",
    },
    {
        id: 19,
        name: "Подсолнухи Field",
        category: "sunflowers",
        price: 12000,
        image: "https://cvetok24.kz/upload/resize_cache/iblock/3ab/275_305_2/3ab3fe1ae9be424b392f49af291b7b6c.jpg",
    },
    {
        id: 20,
        name: "Подсолнухи Happiness",
        category: "sunflowers",
        price: 6200,
        image: "https://imgproxy.kuper.ru/imgproxy/size-500-500/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MDQ1MTQzL29yaWdpbmFsLzEvMjAyNC0wNi0yN1QxNiUzQTQ3JTNBMjQuNzI0MjgyJTJCMDAlM0EwMC8zNTA0NTE0M18xLmpwZw==.jpg",
    },
    {
        id: 21,
        name: "Букет Весенний Микс",
        category: "mixed",
        price: 11500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7IH2ak7MBBKMn0RT8Na3vOV6xB9aQeo7pQ&s",
    },
    {
        id: 22,
        name: "Микс Летний Сад",
        category: "mixed",
        price: 13200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUZDeJ5hzADcBAWnJg7KO0_gZrRnbDx4-Gg&s",
    },
    {
        id: 23,
        name: "Микс Осенний",
        category: "mixed",
        price: 10800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVuEOdsksGJLfvgdJ5eoLeNxmMVbGcSdlBQ&s",
    },
    {
        id: 24,
        name: "Микс Зимних Чудес",
        category: "mixed",
        price: 14500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VIgpt_VPQ7wsqlYUa9dWRaSLnwzXI5BiFA&s",
    },
    {
        id: 25,
        name: "Микс Romantic Red",
        category: "mixed",
        price: 16000,
        image: "https://azalea.kz/wp-content/uploads/2022/12/%D0%91%D1%83%D0%BA%D0%B5%D1%82-%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%82%D0%B8%D0%BA.jpg",
    },
    {
        id: 26,
        name: "Микс Pastel Dream",
        category: "mixed",
        price: 12800,
        image: "https://torontoblooms.ca/cdn/shop/products/APRIL-21-202002621_fda06786-1c54-4be0-963a-b162f3f24239_2000x.jpg?v=1631133749",
    },
    {
        id: 27,
        name: "Tropical Paradise",
        category: "mixed",
        price: 18500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTd3G3dFNAuRUHiLFwT19fwU0t-SnIgqyJsQ&s",
    },
    {
        id: 28,
        name: "Микс Garden Fresh",
        category: "mixed",
        price: 9500,
        image: "https://images.satu.kz/164115260_buket-miks-s.jpg",
    },
    {
        id: 29,
        name: "Букет Celebration",
        category: "mixed",
        price: 22000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbFvz--05ltG7O2tYcJoQ0UkWUVd0HY1Brg&s",
    },
    {
        id: 30,
        name: "Микс Love Forever",
        category: "mixed",
        price: 25000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDv8oNmrgTAXz3UtCAjpObQPVXXdDqub4ZA&s",
    },
]

let cart = []

const themeToggle = document.getElementById("themeToggle")
const searchToggle = document.getElementById("searchToggle")
const searchContainer = document.getElementById("searchContainer")
const searchInput = document.getElementById("searchInput")
const burgerMenu = document.getElementById("burgerMenu")
const mobileNav = document.getElementById("mobileNav")
const cartToggle = document.getElementById("cartToggle")
const cartSidebar = document.getElementById("cartSidebar")
const cartOverlay = document.getElementById("cartOverlay")
const closeCart = document.getElementById("closeCart")
const productsGrid = document.getElementById("productsGrid")
const cartCount = document.getElementById("cartCount")
const cartItems = document.getElementById("cartItems")
const cartTotal = document.getElementById("cartTotal")
const checkoutBtn = document.getElementById("checkoutBtn")
const filterBtns = document.querySelectorAll(".filter-btn")

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products)
    setupEventListeners()
    loadTheme()
})

function setupEventListeners() {
    themeToggle.addEventListener("click", toggleTheme)

    searchToggle.addEventListener("click", toggleSearch)

    searchInput.addEventListener("input", handleSearch)

    burgerMenu.addEventListener("click", toggleMobileNav)

    cartToggle.addEventListener("click", openCart)
    closeCart.addEventListener("click", closeCartSidebar)
    cartOverlay.addEventListener("click", closeCartSidebar)

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", handleFilter)
    })

    checkoutBtn.addEventListener("click", sendToWhatsApp)
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.setAttribute("data-theme", newTheme)
    themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙"

    localStorage.setItem("theme", newTheme)
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light"
    document.documentElement.setAttribute("data-theme", savedTheme)
    themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙"
}

function toggleSearch() {
    searchContainer.classList.toggle("active")
    if (searchContainer.classList.contains("active")) {
        searchInput.focus()
    }
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase()
    const filteredProducts = products.filter(
        (product) => product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm),
    )
    renderProducts(filteredProducts)
}

function toggleMobileNav() {
    mobileNav.classList.toggle("active")
}

function handleFilter(e) {
    const filterValue = e.target.getAttribute("data-filter")

    filterBtns.forEach((btn) => btn.classList.remove("active"))
    e.target.classList.add("active")

    const filteredProducts =
        filterValue === "all" ? products : products.filter((product) => product.category === filterValue)

    renderProducts(filteredProducts)
}

function renderProducts(productsToRender) {
    productsGrid.innerHTML = ""

    productsToRender.forEach((product) => {
        const productCard = createProductCard(product)
        productsGrid.appendChild(productCard)
    })
}

function createProductCard(product) {
    const card = document.createElement("div")
    card.className = "product-card"
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop'">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-category">${product.category}</p>
            <div class="product-price">${product.price.toLocaleString()} ₸</div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                <button class="btn btn-secondary" onclick="shareToWhatsApp(${product.id})">
                    Share
                </button>
            </div>
        </div>
    `
    return card
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId)
    const existingItem = cart.find((item) => item.id === productId)

    if (existingItem) {
        existingItem.quantity += 1
    } else {
        cart.push({ ...product, quantity: 1 })
    }

    updateCartUI()
    showCartNotification()
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId)
    updateCartUI()
}

function updateQuantity(productId, change) {
    const item = cart.find((item) => item.id === productId)
    if (item) {
        item.quantity += change
        if (item.quantity <= 0) {
            removeFromCart(productId)
        } else {
            updateCartUI()
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems

    cartItems.innerHTML = ""
    cart.forEach((item) => {
        const cartItem = createCartItem(item)
        cartItems.appendChild(cartItem)
    })

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    cartTotal.textContent = total.toLocaleString() + " ₸"
}

function createCartItem(item) {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"
    cartItem.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop'">
        </div>
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price.toLocaleString()} ₸</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; background: #ff6b9d; color: white;">×</button>
            </div>
        </div>
    `
    return cartItem
}

function openCart() {
    cartSidebar.classList.add("active")
    cartOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
}

function closeCartSidebar() {
    cartSidebar.classList.remove("active")
    cartOverlay.classList.remove("active")
    document.body.style.overflow = "auto"
}

function showCartNotification() {
    const notification = document.createElement("div")
    notification.textContent = "Added to cart!"
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4ecdc4;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        z-index: 1002;
        animation: slideIn 0.3s ease;
    `

    document.body.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 2000)
}

function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("Ваша корзина пуста!")
        return
    }

    let message = " *Desso flowers* \n\n"

    cart.forEach((item) => {
        message += ` ${item.name}\n`
        message += `Количество: ${item.quantity}\n`
        message += `Цена: ${(item.price * item.quantity).toLocaleString()} ₸\n\n`
    })

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    message += ` *Общая сумма: ${total.toLocaleString()} ₸*\n\n`
    message += "Спасибо что выбрали Desso Flowers "

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/7008701177?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
}

function shareToWhatsApp(productId) {
    const product = products.find((p) => p.id === productId)

    let message = `Посмотрите на этот прекрасный цветок от Desso flowers!\n\n`
    message += ` *${product.name}*\n`
    message += `Категория: ${product.category}\n`
    message += `Общая сумма: ${product.price.toLocaleString()} ₸\n\n`
    message += "Посетите наш магазин, чтобы приобрести еще больше удивительных цветов! 🌺"

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
}
