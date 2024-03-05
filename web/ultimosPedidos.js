fetch('http://localhost:3000/pedidos')
    .then(response => response.json())
    .then(data => mostrarDatos(data))
    .catch(err => mostrarError(err))
const buscar = document.getElementById("buscar");
const ultimosPedidos = document.getElementById("ultimosPedidos");

const mostrarDatos = (data) => {
    console.log(data);
    setTimeout(() => {
        for (let i = 0; i < data.length; i++) {
            ultimosPedidos.innerHTML += `<p>Información del último pedido: <br>
                id del cliente: ${data[i].id_cliente}<br>
                id del producto: ${data[i].id_producto}<br>
                nombre del cliente: ${data[i].nombre_cliente}<br>
                fecha: ${data[i].fecha}<br>
                Estado: ${data[i].estado}<br>
                Coste total: ${data[i].coste_total}<br>
                Cantidad total: ${data[i].cantidad_total}<br>
                </p>
                <button onclick="handleDeletePedido(${data[i].id_cliente})">
                    Eliminar
                </button>`;
        }
    }, 1000);
};

function handleDeletePedido(pedidoId) {
    fetch(`http://localhost:3000/pedidos/${pedidoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al eliminar el pedido. Código: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Realizar acciones adicionales después de eliminar el pedido (si es necesario)
            console.log('Pedido eliminado exitosamente:', data);
        })
        .catch(error => {
            console.error('Error al eliminar el pedido:', error);
        });
}

function mostrarError(err) {
    if (err) {
        console.log("Se ha encontrado un error")
        ultimosPedidos.innerHTML += `<p>La base de datos se encuentra apagada o no existen datos: <br>
            Posibles motivos: <br>
            1.- Está en mantenimiento<br>
            2.- Ha habido algún error<br>
            3.- El dispositivo está apagado<br>
            4.- No existen datos<br>
            <i>Consultar al gestor de dicha base de datos</i>
            </p>
            `

    }
}
buscar.addEventListener("click", () => {
    let busqueda = document.getElementById("busqueda").value;
    location.href = `http://192.168.1.147:3000/pedidos/${busqueda}`
})