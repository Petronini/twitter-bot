let users = ["Pedro", "Jauma", "Joe"];

function timer(users) {
  // console.log(users.length);
  let count = 0;
  let start = setInterval(() => {
    if (count < users.length) {
      console.log(users[count], count);
      count++;
    } else clearInterval(start);

    // if (count => users.length) clearInterval(start);
  }, 3000);
}

timer(users);

// let timeRandom = () => Math.floor(Math.random()*100*1000 + 5000);
// console.log(timeRandom());
