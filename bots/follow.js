// sigue a la gente que te sigue
const Twit = require("twit");
const config = require("../config.js");
// API's Twitter config
let T = new Twit(config);
/////////////////////////
// Dresciption: sigue a los usuario que me siguen
function follow(seguirUsuario) {
  const path = "friendships/show";
  const params = {
    source_screen_name: "escarabajus",
    target_screen_name: seguirUsuario,
  };
  T.get(path, params, (err, data, response) => {
    let source = data.relationship.source.following;
    let target = data.relationship.target.following;
    console.log(
      "source: " + params.source_screen_name,
      source,
      "target: " + params.target_screen_name,
      target
    );
    following(source, target, seguirUsuario);
  });
}

function following(source, target, seguirUsuario) {
  if (source == false && target) {
    const path = "friendships/create";
    const params = { screen_name: seguirUsuario };
    T.post(path, params, (err, data, response) => {
      console.log(data.screen_name, "✪ followed");
    });
  }
}

const path = "followers/list";
const params = { screen_name: "escarabajus", count: 50 };
T.get(path, params, (err, data, response) => {
  // console.log(data.users[1].name)
  data.users.forEach( (element) => follow(element.screen_name) );
});
