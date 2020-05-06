const Twit = require("twit"); //Importamos la libreria de twit 2.2.11
const cron = require("node-cron");//The node-cron module is tiny task scheduler in pure JavaScript for node.js based on GNU crontab. This module allows you to schedule task in node.js using full crontab syntax.
var config = require('./config.js'); //Importamos la configuracion de las 
                                    //credenciales de twitter desde el archivo config.js

//Configuramos la API de Twitter, los datos estan en config.js
var T = new Twit(config);

/**START Configuración de parametros**/
const prob_rt = 5;
const prob_mg = 10;
const prob_follow = 7;
const min_followers = 750; //Minimo de seguidores para que interaccione con la cuenta

//Limite de acciones por dia
const mg_diarios = 400;
const rt_diarios = 70;
const follow_diarios = 250;

//Control de las acciones por dia actualmente
var mg_diarios_actuales = 0;
var rt_diarios_actuales = 0;
var follow_diarios_actuales = 0;
/**-END  Configuración de parametros**/

/**Reset de acciones diarias**/
cron.schedule("10 20 8 * * *", () => {
  mg_diarios_actuales = 0;
  rt_diarios_actuales = 0;
  follow_diarios_actuales = 0;
});
/**-Reset de acciones diarias**/


//Declaramos los hashtags o textos que nos interesa seguir
console.log("Buscando tweets . . .");

const Spain = ['35.693', '-9.47', '43.66',' 3.582'];
const Barcelona = ['41.046', '0.637',  '42.066', '3.505'];
const sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];
const bcn = '41.3897,2.1568,20km';
const Bcn = '41.046,0.637,42.066,3.505';
// Barcelona '41.046', '0.637',  '42.066', '3.505'
// Spain '35.693', '-9.47', '43.66',' 3.582' 
// , '#ElIntermedio', '#QuedateEnCasa'
// const stream1 = T.stream("statuses/filter", { track: "#QuedateEnCasa" });
// const stream2 = T.stream("statuses/filter", { track: "#EnsEnSortirem" });
// const stream3 = T.stream("statuses/filter", { track: "#ElIntermedio" });
// track params: locations: Spain, language: 'es' 
const stream = T.stream(  "statuses/filter", { 
  track: ['#EnsEnSortirem filter:media', '#QuedateEnCasa filter:media', '#ElIntermedio filter:media', '#QuédateEnCasa'],
  locations: Bcn,
  language: '' 
  }  );
  
// escuchando todos los tweets que contengan el hashtag #QuedateEnCasa y #EnsEnSortirem

// Un "retweet" dado a un post de hastag/texto concreto
// stream1.on("tweet", reTweet);
// stream2.on("tweet", reTweet);

// Un "Me gusta" dado a un post de hastag/texto concreto
// stream1.on("tweet", meGusta);
// stream2.on("tweet", meGusta);
// stream3.on("tweet", meGusta);
stream.on("tweet", meGusta);

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


//Funcion encargada de dar Me Gusta
function meGusta(tweet) {
  let random_number = randomNumber();
  // console.log("Número random", random_number, "asignado a @" + tweet.user.screen_name, "followers", tweet.user.followers_count  );
  if (random_number < prob_mg && tweet.user.followers_count > min_followers && (mg_diarios_actuales < mg_diarios) && tweet.entities.hashtags.length < 3) {
    T.post("favorites/create", { id: tweet.id_str }, function(
      err,
      data,
      response
    ) {
      console.log("Me gusta dado a: @" + tweet.user.screen_name + ". Random= " + random_number + ". Sus folowers son: " + tweet.user.followers_count
      + ". Localidad: " + tweet.user.location +". Created at " + tweet.created_at +  '. Texto: '+ tweet.text  );
      console.log('___________________________________________________');
      
    });
    mg_diarios_actuales++;
    console.log("Hoy llevas " + mg_diarios_actuales + " 'MeGusta' dados.");
  }
}


//Devuelve un numero del 1 al 100
function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}