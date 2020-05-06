const Twit = require('twit');
const config = require('./config.js');
// API's Twitter config
let T = new Twit(config);
/////////////////////////

const path = 'friendships/show'; 
const params = {source_screen_name: 'HansPeterT', target_screen_name: 'JorgeRoot' }; 
T.get( path, params, (err, data, response) => {
    // console.log(data.users[1].name)
    //data.users.forEach( element => console.log(element.name));
    console.log( params.source_screen_name, data.relationship.source.following,
                 params.target_screen_name ,data.relationship.target.following);
    
  } );

