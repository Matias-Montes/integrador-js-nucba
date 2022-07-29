const getCelulares = () => listadoCelulares = JSON.parse(localStorage.getItem('listadoCelulares'))

const nameInput = document.querySelector(".new-name");
const marcInput = document.querySelector("#favoriteOnly");
const priceInput = document.querySelector(".new-price");
const newPriceInput = document.querySelector(".new-list-price");
const descInput = document.querySelector(".new-desc")
const imgInput = document.querySelector(".new-img");
const btnInput = document.querySelector(".btn");
const btnClean = document.querySelector(".clear")



btnInput.addEventListener("click", () => {
    
    getCelulares();

    if(nameInput.value.toLowerCase().trim() == "") {
        return
    } else if (priceInput.value.trim() == "" || priceInput.value.trim() == 0 ){
        return
    } else if (newPriceInput.value.trim() == "" || newPriceInput.value.trim() == 0 ) {
        return
    } else if (descInput.value.toLowerCase().trim() == "") {
        return
    } else {
        
        let newCell = {
            id: listadoCelulares.length + 1,
            marca: marcInput.value,
            nombre: nameInput.value.toLowerCase().trim(),
            precio: priceInput.value.trim(),
            precioInicial: newPriceInput.value.trim(),
            descripcion: descInput.value.toLowerCase().trim(),
            imagen: imgInput.value.trim(),
            
        }
    
        listadoCelulares.push(newCell)        
        localStorage.setItem('listadoCelulares', JSON.stringify(listadoCelulares));
    }
}) 

btnClean.addEventListener("click", (e) => {
    e.preventDefault;
    getCelulares();
    let reset = listadoCelulares.filter(cell => cell.id <= 12)
    localStorage.setItem('listadoCelulares', JSON.stringify(reset))    
})

const chequeo = () => {
    if(sessionStorage.getItem("logueado")){
        btnInput.removeAttribute("hidden")
    }
}

window.addEventListener("DOMContentLoaded", chequeo);

