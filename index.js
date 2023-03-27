const app = require('./app')
const port = app.get('port')
require('dotenv').config() //inicializa todas las variables de entorno
const { database_connect } = require('./db') 
async function execute(){
    await database_connect() // TypeError: database_connect is not a function wtf xdd
    app.listen(port, () => {
        console.info("Server running at port ", port)
    })
}
execute() // papa funcion que llama a database_connect y despues ejecuta el app