mainDiv = document.getElementById("content");
function multiply() {
  var a = document.getElementById("fnum").value;
  var b = document.getElementById("snum").value;

  mainDiv.innerHTML = "<p>The product of " + a + " and " + b + ":";
  mainDiv.innerHTML += a*b + "</p>";
}
