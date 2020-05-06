// window.onload = function () {
document.querySelector(".btn-calculate").onclick = function () {
    var name = document.querySelector("#username").value;
    var height = document.querySelector("#userheight").value;
    var weight = document.querySelector("#userweight").value;
    var result = (weight / height / height) * 10000;
    if (result < 18.5) {
        document.querySelector(".displayname").innerHTML = "Hi " + name + "!";
        document.querySelector(".displaybmi").innerHTML = "Your BMI is " + Math.round(result);
        document.querySelector(".healthstatus").innerHTML = 'This is considered underweight.'
    } else if (result > 18.5 && result < 24.5) {
        document.querySelector(".displayname").innerHTML = "Hi " + name + "!";
        document.querySelector(".displaybmi").innerHTML = "Your BMI is " + Math.round(result);
        document.querySelector(".healthstatus").innerHTML = 'This is considered normal.'
    } else if (result > 24.9) {
        document.querySelector(".displayname").innerHTML = "Hi " + name + "!";
        document.querySelector(".displaybmi").innerHTML = "Your BMI is " + Math.round(result);
        document.querySelector(".healthstatus").innerHTML = 'This is considered obese.'
    }
    // document.querySelector(".displayname").innerHTML = 'Hi ' + name;
}
// }