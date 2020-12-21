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
