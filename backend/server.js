import express  from "express";
import connectDatabase from "./src/config/connectPostgres";
import {allowCrossDomain} from "./src/config/corsConfig";
import initRoutes from './src/routes'
require('express-async-errors');
require('dotenv').config();
var cors = require('cors')
const app = express();
console.log( process.env.CLIENT_URL);
app.use(cors({
    origin: "https://skylie-store-1yc6.vercel.app",
    //origin: "http://localhost:3000",
    methods:['POST','GET','PUT','DELETE']
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
initRoutes(app);
connectDatabase();
const port = process.env.PORT || 8888;
const listener = app.listen(port, ()=>{
    console.log("server is running on port ",listener.address().port)
})