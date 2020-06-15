// sigue a la gente que te sigue
const Twit = require("twit");
const config = require("../config.js");
// API's Twitter config
let T = new Twit(config);
// ///////////////////////
// Dresciption: sigue a los usuario que me siguen
function follow(seguirUsuario) {
    const path = "friendships/show";
    const params = {
        source_screen_name: "escarabajus",
        target_screen_name: seguirUsuario
    };
    T.get(path, params, (err, data, response) => {
        let source = data.relationship.source.following;
        let target = data.relationship.target.following;
        console.log("source: " + params.source_screen_name, source, "target: " + params.target_screen_name, target);
        following(source, target, seguirUsuario);
    });
}

function following(source, target, seguirUsuario) {
    if (source == false && target) {
        const path = "friendships/create";
        const params = {
            screen_name: seguirUsuario
        };
        T.post(path, params, (err, data, response) => {
            console.log(data.screen_name, "✪ followed");
        });
    }
}
// const path = "followers/list";
// const params = { screen_name: "escarabajus", count: 2 };
// T.get(path, params, (err, data, response) => {
// // console.log(data.users[1].name)
// data.users.forEach( (element) => follow(element.screen_name) );
// });

// ///////////////
// / new code ///
// //////////////
function followersList() {
    let list = ['fake friend'];
    const path = "followers/list";
    const params = {
        screen_name: "escarabajus",
        count: 2
    };
    
    T.get(path, params, (err, data, response) => { 
        // console.log(data.users[1].screen_name);
        // data.users.forEach((el, i) => console.log('elemento', i, el.screen_name)); // probando salida
        // data.users.forEach( (element, index) => list[index] = element.screen_name );
        data.users.forEach(( element) => list.push(element.screen_name) );
        // friendshipsShow(list);
    });


    console.log(list); 
    setTimeout(() => console.log(list), 1000*2);


}
function friendshipsShow(list){
    console.log('lista dentro de friendshipShow', list);
    
}


function test() {
    let lista = followersList();
    if (lista == undefined) {
        console.log('sin definir');
        
    } else {
        console.log('tipo:', typeof lista);
        console.log('lista',lista);
        // lista.forEach(el => console.log(el));
    }
}

test()
