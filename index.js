const Twit = require("twit"); //Importamos la libreria de twit 2.2.11
var config = require('./config.js'); //Importamos la configuracion de las 
                                    //credenciales de twitter desde el archivo config.js

//Configuramos la API de Twitter, los datos estan en el .env
var T = new Twit(config);

//Declaramos los hashtags o textos que nos interesa seguir
const stream1 = T.stream("statuses/filter", { track: "#QuedateEnCasa" });
const stream2 = T.stream("statuses/filter", { track: "#EnsEnSortirem" });

// escuchando todos los tweets que contengan el hashtag #QuedateEnCasa y #EnsEnSortirem

// Un "retweet" dado a un post de hastag/texto concreto
stream1.on("tweet", reTweet);
stream2.on("tweet", reTweet);

// Un "Me gusta" dado a un post de hastag/texto concreto
stream1.on("tweet", meGusta);
stream2.on("tweet", meGusta);

// Retweets automáticamente
//Funcion encargada de dar Retweet
function reTweet(tweet) {
  T.post("statuses/retweet/:id", { id: tweet.id_str }, function(
    err,
    data,
    response
  ){
    console.log("RT dado a: @" + tweet.user.screen_name);
  });
  // TODO recuentos
}

// Dar Me Gusta a Tweets de forma automática
function meGusta(tweet) {
  T.post("favorites/create", { id: tweet.id_str }, function(
    err,
    data,
    response
  ) {
    console.log("Me gusta dado a: @" + tweet.user.screen_name);
  });
  // TODO recuentos
}