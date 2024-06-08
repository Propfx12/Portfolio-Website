

/*let  = " ";
  for (let i = 0; i <= 5; i++) {
    /*console.log(i);
}

const i = [1, 2, 3, 4,];

document.getElementById("num").innerHTML = i;*/


// loop

const nums = [1, 2, 3, 4, 5,];
let prop = nums.length;

let text = "<ul>";
for (let i = 0; i < prop; i++) {
  text += nums[i] + "<br>" + "<br>";
}


text += "</ul>";

document.getElementById("demo").innerHTML = text;

// Array

const login = ["username", "password", "contact", "sign in", "sign up"];

document.getElementById("log").innerHTML = login[4];
