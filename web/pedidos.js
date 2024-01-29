const formElement = document.getElementById("pedidos");
const buscar = document.getElementById("buscar")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let id_cliente = document.getElementById("id_cliente").value;
    let id_producto = document.getElementById("id_producto").value;
    let nombre_cliente = document.getElementById("nombre_cliente").value;
    let fecha = document.getElementById("fecha").value;
    let estado = document.getElementById("estado").value;
    let coste_total = document.getElementById("coste_total").value;
    let cantidad_total = document.getElementById("cantidad_total").value;
    console.log(document.getElementById("cantidad_total").value)

    let id_clienteInt = parseInt(id_cliente)
    let id_productoInt = parseInt(id_producto)
    let coste_totalInt = parseInt(coste_total)
    let cantidad_totalInt = parseInt(cantidad_total)

    let data = {
        id_cliente: id_clienteInt,
        id_producto: id_productoInt,
        nombre_cliente: nombre_cliente,
        fecha: fecha,
        estado: estado,
        coste_total: coste_totalInt,
        cantidad_total: cantidad_totalInt
    };
    let dataJson = JSON.stringify(data);


    fetch('http://localhost:3000/pedidos', {
        method: 'Post',
        body: dataJson
    })
})

buscar.addEventListener("click", () => {
    let busqueda = document.getElementById("busqueda").value;
    location.href = `http://localhost:3000/pedidos/${busqueda}`
})

fetch('http://localhost:3000/pedidos').then(x => x.json()).then(x => console.log)

