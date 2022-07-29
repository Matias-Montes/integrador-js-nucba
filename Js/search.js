const getCelulares = () => listadoCelulares = JSON.parse(localStorage.getItem('listadoCelulares'))
getCelulares();

const contenedorBusqueda = document.querySelector(".product-container");

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

colocarTarjetas(listadoCelulares,contenedorBusqueda)

const busqueda = document.querySelector(".search-box");

const filtrar = (e) => {
    e.preventDefault();   
    let palabra = busqueda.value.toLowerCase().trim();
    let resultados = listadoCelulares.filter(cell => cell.nombre.toLowerCase().indexOf(palabra) !== -1 || !cell.marca.toLowerCase().indexOf(palabra) )
    ;
    contenedorBusqueda.innerHTML = '';
    colocarTarjetas(resultados,contenedorBusqueda);
    }

busqueda.addEventListener("keyup", filtrar);

