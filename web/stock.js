fetch('http://localhost:3000/productos')
.then(response => response.json())
.then(data => mostrarDatos(data))
.catch(err => mostrarError(err))
const buscar = document.getElementById("buscar");
const stock = document.getElementById("stock");    

const mostrarDatos = (data) => {

    console.log(data)
        setTimeout(() => {
            for (let i = 0; i < data.length; i++) {
                stock.innerHTML += `<p>Información del stock: <br>
                Coste: ${data[i].coste}€<br>
                id del producto: ${data[i].id}<br>
                nombre del producto: ${data[i].nombre}<br>
                Cantidad de stock: ${data[i].stock}<br>
                </p>`;
            }
        }, 1000); // 1000 milisegundos = 1 segundos
    }

function mostrarError(err) {
    if (err){
        console.log("Se ha encontrado un error")
        stock.innerHTML += `<p>La base de datos se encuentra apagada o no existen datos: <br>
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
buscar.addEventListener("click", ()=>{
    let busqueda = document.getElementById("busqueda").value;
    location.href = `http://192.168.1.147:3000/productos/${busqueda}`
})