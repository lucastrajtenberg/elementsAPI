const app = require('./app')
const port = app.get('port')
require('dotenv').config() //inicializa todas las variables de entorno
const { database_connect } = require('./db') // otra cosita, viste lo que exporta db/index?
// esto se llama desempaquetar
// dado un objeto obtenemos un atributo de el (database_connect). 
// el objeto es lo que exporta db/index.js, entonces solamente llamamos a ese atributo(ya q es funcion)
// papa no sabe porque ahora hay error xdd xdd
async function execute(){

    await database_connect() // TypeError: database_connect is not a function wtf xdd

    app.listen(port, () => {
        console.info("Server running at port ", port)
    })
}


execute() // papa funcion que llama a database_connect y despues ejecuta el app