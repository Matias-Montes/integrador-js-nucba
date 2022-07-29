const createFooter = () => {
    let footer = document.querySelector("footer")

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" alt="white logo" class="logo">
    
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti omnis laboriosam placeat vero cumque consequuntur rerum ad dicta deserunt quas impedit, ipsum suscipit ipsa adipisci reiciendis doloribus aspernatur atque aliquid autem. Reiciendis corporis quia, atque iste ipsa ut nesciunt? Exercitationem quidem in possimus rerum? Aliquid facilis odit architecto obcaecati sint? Nam dicta debitis pariatur asperiores voluptatum iste est voluptate ex eum nulla natus amet perspiciatis voluptates quasi, consequatur iure? Rem, corrupti eos, magnam praesentium ut ullam officia quisquam voluptas eligendi eum dolorem dicta ea, velit tempora laboriosam. Repellat laborum soluta voluptatum nesciunt eum quo sequi repellendus totam, pariatur quod.</p>
<p class="info">Soporte emails - help@cellphones.com, custommersupport@cellphones.com</p>
<p class="info">Telefono +54 1164200475</p> 
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">term & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Integrador Js Nucba - Matias Montes</p>
`

}

createFooter()