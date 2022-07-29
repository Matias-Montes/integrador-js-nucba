const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    <div class="nav">
    <a href="/index.html"><img src="./Img/dark-logo.png" class="brand_logo" alt="Logo Clothing"></a>
        <div class="nav-items">
            <div class="search">
            <a href="/search.html"><button class="search-btn">buscador</button></a>
                <a href="/login.html"><img src="/Img/user.png" alt="user"></a>
                <a href="/404.html"><img src="/Img/cart.png" alt="cart"></a>
            </div>

        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="/index.html" class="link">inicio</a></li>
        <li class="link-item"><a href="/index.html#samsung" class="link">Samsung</a></li>
        <li class="link-item"><a href="/index.html#iphone" class="link">Iphone</a></li>
        <li class="link-item"><a href="/404.html" class="link">accessorios</a></li>
    </ul>
    `;
}

createNav();