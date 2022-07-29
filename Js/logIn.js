const loader = document.querySelector(".loader");
const uName = document.querySelector("#name");
const uPassword = document.querySelector("#password");
const submitBtn = document.querySelector(".submit-btn");



submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    listadoUsuarios = JSON.parse(localStorage.getItem('listadoUsuarios'));

    let consulta = listadoUsuarios.find(user => user.name == uName.value.trim());
    
    if (consulta == undefined){
        showAlert("nombre incorrecto")
    } else if (consulta.password != uPassword.value){
        showAlert("contraseña incorrecta")
    } else {
        sessionStorage.setItem('logueado', "true");
        window.location.href = "/product.html"
    }
});

const showAlert = (msg) => {
    let alertBox = document.querySelector(".alert-box");
    let alertMsg = document.querySelector(".alert-msg");
    alertMsg.innerHTML= msg;
    alertBox.classList.add("show");
    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2000)
}
