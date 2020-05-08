const Twit = require("twit");
const config = require("./config.js");
// API's Twitter config
let T = new Twit(config);
/////////////////////////

function follow(seguirUsuario) {
  const path = "friendships/show";
  const params = {
    source_screen_name: "Neo_end",
    target_screen_name: seguirUsuario
  };
  T.get(path, params, (err, data, response) => {
    console.log(
      "source: " + params.source_screen_name,
      data.relationship.source.following,
      "target: " + params.target_screen_name,
      data.relationship.target.following
    );
    // following(data.relationship.target.following, seguirUsuario);
  });
}

function following(verificandoTarget, seguirUsuario) {
  if (verificandoTarget) {
    const path = "friendships/create";
    const params = { screen_name: seguirUsuario };
    T.post(path, params, (err, data, response) => {
      console.log(data.screen_name, "followed");
    });
  }
}


const path = "followers/list";
const params = { screen_name: "Neo_end", count: 100 };
T.get(path, params, (err, data, response) => {
  data.users.forEach(  (element) => follow(element.screen_name)  );
});



