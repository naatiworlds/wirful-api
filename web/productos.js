const formElement = document.getElementById("productos");
const buscar = document.getElementById("buscar");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let nombre = document.getElementById("Nombre").value;
    let id = document.getElementById("id").value;
    let coste = document.getElementById("coste").value;
    let stock = document.getElementById("stock").value;
    let idInt = parseInt(id);
    let costeInt = parseInt(coste);
    console.log(document.getElementById("stock").value)

    let data = { id: idInt, nombre: nombre, coste: costeInt, stock: stock };
    let dataJson = JSON.stringify(data);


    fetch('http://localhost:3000/productos', {
        method: 'Post',
        body: dataJson
    })
})

buscar.addEventListener("click", () => {
    let busqueda = document.getElementById("busqueda").value;
    location.href = `http://localhost:3000/productos/${busqueda}`
})

fetch('http://localhost:3000/productos').then(x => x.json()).then(x => console.log)