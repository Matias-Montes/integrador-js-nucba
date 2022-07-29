let listadoUsuarios = [
    {   
        id: 1,
        name: "tester1",
        password: "Tester1.1234",
        mail: "testeo@asdf.com",
    },
]
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("listadoUsuarios")) {
      return
    } else {
      localStorage.setItem('listadoUsuarios', JSON.stringify(listadoUsuarios));
    }
    });