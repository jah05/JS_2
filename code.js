mainDiv = document.getElementById("content");
function divide() {
  var a = document.getElementById("fnum").value;
  var b = document.getElementById("snum").value;
  var display = document.getElementById("display").checked
  var intdiv = document.getElementById("intdiv").checked

  if(intdiv) {
    var quotient = parseInt(a/b)
  }
  else {
    var quotient = a/b
  }
  if(display){
    mainDiv.innerHTML = "<p>The quotient of " + a + " and " + b + ":";
  }
  else {
    mainDiv.innerHTML += "<p>The quotient of " + a + " and " + b + ":";
  }
  mainDiv.innerHTML += quotient + "</p>";
}
