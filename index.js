const Twit = require("twit"); //Importamos la libreria de twit 2.2.11
var config = require('./config.js'); //Importamos la configuracion de las 
                                    //credenciales de twitter desde el archivo config.js

//Configuramos la API de Twitter, los datos estan en el .env
var T = new Twit(config);