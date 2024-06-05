

/*let  = " ";
  for (let i = 0; i <= 5; i++) {
    /*console.log(i);
}

const i = [1, 2, 3, 4,];

document.getElementById("num").innerHTML = i;*/


const nums = [1, 2, 3, 4,];

let text = "";
for (let i = 0; i < nums.length; i++) {
  text += nums[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

text += nums[0] + "<br>";
text += nums[1] + "<br>";
text += nums[2] + "<br>";
text += nums[3] + "<br>";
text += nums[4] + "<br>";
