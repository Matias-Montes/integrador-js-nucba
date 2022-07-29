const getUsuarios = () => listadoUsuarios = JSON.parse(localStorage.getItem('listadoUsuarios'))


const loader = document.querySelector(".loader")
const submitBtn = document.querySelector(".submit-btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const tac = document.querySelector("#terms-and-cond");

const expRegNomUsuario = /^[a-z0-9_-]{3,16}$/;
const expRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const expRegPass = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;


submitBtn.addEventListener("click", () => {
    if(!expRegNomUsuario.test(name.value.trim())){
        showAlert("los nombres de usuarios no pueden llevar mayuscula, caracteres especiales salvo - y _ , y deben tener entre 3 y 16 caracteres")
    } else if (!expRegEmail.test(email.value.trim())){
        showAlert("ingresa un email valido")
    } else if (!expRegPass.test(password.value.trim())){
        showAlert("la contraseña debe tener debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos")
    } else if (!tac.checked){
        showAlert("debes aceptar los terminos y condiciones")
    } else (
        sendData()
    )
})

// send data

const sendData = () => {
    getUsuarios();
    loader.style.display = "block"
    
    let chequeoDatos = listadoUsuarios.find(data => data.mail == email.value)
    let chequeNombre = listadoUsuarios.find(data => data.name == name.value)
       
    if(chequeoDatos == undefined && chequeNombre == undefined){    
    let newUser = {
    id: listadoUsuarios.length + 1,
    name: name.value.trim(),
    password: password.value.trim(),
    email: email.value.trim(),    
    }
    listadoUsuarios.push(newUser)
    setTimeout(() => {
        loader.style.display = "none"
    }, 1000);
    
    localStorage.setItem('listadoUsuarios', JSON.stringify(listadoUsuarios));
    window.location.href = "/login.html"
} else {
    loader.style.display = "none"
    showAlert("nombre o email repetidos")    
}
} 

// alert function

const showAlert = (msg) => {
    let alertBox = document.querySelector(".alert-box");
    let alertMsg = document.querySelector(".alert-msg");
    alertMsg.innerHTML= msg;
    alertBox.classList.add("show");
    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 3000)
}
