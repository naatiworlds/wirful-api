/** Depencencias **/
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const productosRouter = require('../rutas/productos');
const pedidosRouter = require('../rutas/pedidos');
/** Depencencias **/

const app = express()

/** Configuraciones **/
app.set('port', process.env.PORT || 3000);
/** Configuraciones **/

/** Middlewares **/
app.use(
    express.urlencoded({
        extended: true
    })
)
    
app.use(express.json({
    type:"*/*"
}))

app.use(cors())
/** Middlewares **/

/** Rutas **/
app.get('/', (req, res) => {
    const protfolio = "https://wirful-api.vercel.app/productos";
    const tienda = "https://wirful-api.vercel.app/pedidos";
    res.json({
        welcome: "Welcome to wirful/Api",
        enlaces: "interesting endpoints",
        protfolio: protfolio,
        tienda: tienda
    })
});
app.use('/productos', productosRouter);
app.use('/pedidos', pedidosRouter);


/** Rutas **/

app.listen(app.get('port'), () => {
    console.log(`Estoy funcionando en http://localhost:${app.get('port')}`)
})