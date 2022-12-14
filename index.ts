import Server from "./classes/server";
import { SERVER_PORT } from "./global/environments";
import router  from "./routes/router";
import bodyParser from "body-parser";
import cors from'cors';

const server = new Server();

//bodyParser
server.app.use( bodyParser.urlencoded( {extended: true} ) );
server.app.use( bodyParser.json() )


//CORS

server.app.use( cors( { origin:true, credentials: true } )  )
server.app.use('/', router);


server.start( ()=>{
    console.log(`Inciando servidor en el puerto ${SERVER_PORT}`)
})