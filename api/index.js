/** Depencencias **/
const express = require('express')
const cors = require('cors')
const fs = require('fs')
/** Depencencias **/

const app = express()

/** Configuraciones **/
app.set('port', process.env.PORT || 3000);
/** Configuraciones **/

/** Middlewares **/
app.use(
    express.urlencoded({
        extended: false
    })
)
    
app.use(express.json({
    type:"*/*"
}))

app.use(cors())
/** Middlewares **/

/** Rutas **/

app.use(require('../rutas/productos'))
app.use(require('../rutas/pedidos'))


/** Rutas **/

app.listen(app.get('port'), () => {
    console.log(`Estoy funcionando en http://localhost:${app.get('port')}`)
})