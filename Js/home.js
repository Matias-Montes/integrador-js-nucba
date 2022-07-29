const productContainer = [...document.querySelectorAll(".product-container")];
const ntxBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];


productContainer.forEach((item,i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    ntxBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    })
    
    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    })
})


const colocarTarjetas = (celulares, contenedor) => {
       
    celulares.forEach(celular => {        
 
    const cellCard = document.createElement('div');
    cellCard.setAttribute("class", 'product-card');   

        const cellImage = document.createElement('div');
        cellImage.setAttribute("class", 'product-image');
        

            const discount = document.createElement('span');
            discount.setAttribute("class", 'product-image');

            const imgCell = document.createElement('img');
            imgCell.setAttribute('src', '');
            imgCell.setAttribute("class", 'product-thumb');
            imgCell.setAttribute("alt", '');
            imgCell.setAttribute("id", `img${celular.id}${contenedor.id}`);
            

            const cellBtn = document.createElement('button');
            cellBtn.setAttribute("class", 'card-btn');
            cellBtn.setAttribute("id", `btn${celular.id}${contenedor.id}`)


        const cellInfo = document.createElement('div');
        cellInfo.setAttribute("class", 'product-info');

            const cellName = document.createElement('h2');
            cellName.setAttribute("class", 'product-brand');
            cellName.setAttribute("id", `name${celular.id}${contenedor.id}`)

            const cellDesc = document.createElement('p');
            cellDesc.setAttribute("class", 'product-short-des');
            cellDesc.setAttribute("id", `desc${celular.id}${contenedor.id}`)

            const cellPrice = document.createElement('span');
            cellPrice.setAttribute("class", 'price');
            cellPrice.setAttribute("id", `price${celular.id}${contenedor.id}`)

            const cellInitialPrice = document.createElement('span');
            cellInitialPrice.setAttribute("class", 'actual-price');
            cellInitialPrice.setAttribute("id", `initialPrice${celular.id}${contenedor.id}`)

    contenedor.appendChild(cellCard)   

    cellCard.appendChild(cellImage)
    cellImage.appendChild(discount)
    cellImage.appendChild(imgCell)
    cellImage.appendChild(cellBtn)

    cellCard.appendChild(cellInfo)
    cellInfo.appendChild(cellName)
    cellInfo.appendChild(cellDesc)
    cellInfo.appendChild(cellPrice)
    cellInfo.appendChild(cellInitialPrice)
  
    const cardImg = document.querySelector(`#img${celular.id}${contenedor.id}`);
    const cardTitle = document.querySelector(`#name${celular.id}${contenedor.id}`);
    const cardPrice = document.querySelector(`#price${celular.id}${contenedor.id}`);
    const cardActualPrice = document.querySelector(`#initialPrice${celular.id}${contenedor.id}`);
    const cardshorDes = document.querySelector(`#desc${celular.id}${contenedor.id}`);
    const carCard = document.querySelector(`#btn${celular.id}${contenedor.id}`).textContent = `Add to Car`

  
    cardImg.src = celular.imagen;
    cardTitle.textContent = celular.nombre;
    cardPrice.textContent = `$${celular.precio}`;      
    cardActualPrice.textContent = `$${celular.precioInicial}`;
    cardshorDes.textContent = `${celular.descripcion.slice(0, 25)}`
        
    });
    }    

const bestSelling = document.querySelector('#bestSelling');
const samsungPhones = document.querySelector("#samsungPhones");
const iphonePhones = document.querySelector("#iphonesPhones");
    
const filtarNovedades = listadoCelulares.filter(cell => cell.id >= 13 || cell.id >= 1 && cell.id <= 3 || cell.id >= 7 && cell.id <= 9);
const filtrarSamsung = listadoCelulares.filter(cell => cell.marca === "samsung");
const filtrarIphone = listadoCelulares.filter(cell => cell.marca === "iphone");   


colocarTarjetas(filtarNovedades, bestSelling );
colocarTarjetas(filtrarSamsung, samsungPhones );
colocarTarjetas(filtrarIphone, iphonePhones );

