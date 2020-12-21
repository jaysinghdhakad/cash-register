var billAmount = document.querySelector("#textarea1");
var amountCust = document.querySelector("#textarea2");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

function changeHandler() {
  var amount = billAmount.value;
  if (amount === "") {
    output.innerText = "Please put customer bill amount";
  }
}
function clickHandler() {
  console.log("jay");
  var cost = parseInt(billAmount.value);
  var payment = parseInt(amountCust.value);
  var change = payment - cost;
  console.log(change);
  console.log(change % 10);
  var d = change % 10;
  var c = ((change % 100) - d) / 10;
  var b = ((change % 1000) - (c * 10 + d)) / 100;
  var a = (change - (b * 100 + c * 10 + d)) / 1000;
  console.log(a + b + c + d);
  if (d >= 5) {
    var z = d - 5;
    var y = 1;
  } else {
    var z = d;
    var y = 0;
  }
  var x = Math.floor(c / 2);
  var w = c % 2;
  if (b >= 5) {
    var v = b - 5;
    var u = 1;
  } else {
    var v = b;
    var u = 0;
  }
  var t = Math.floor(a / 2);
  var s = (a % 2) * 2;
  var f = s + u;

  var finalOutput =
    z +
    " - 1 rupee notes, " +
    y +
    "- 5 rupee notes, " +
    x +
    " - 20 rupee notes, " +
    w +
    " - 10 rupee notes, " +
    v +
    " - 100 rupee notes, " +
    f +
    " - 500 rupee notes, " +
    t +
    " - 2000 rupee notes, ";
  output.innerText = finalOutput;
}

amountCust.addEventListener("change", changeHandler);

button.addEventListener("click", clickHandler);
