import express from "express";
import { SERVER_PORT } from "../global/environments";

export default class Server {

    public app: express.Application;
    public port: number;
    
    constructor(){
        this.port = SERVER_PORT;
        this.app = express();
    }

    
    public start (callback: () => void) {

        this.app.listen( this.port, callback );
    }
}
