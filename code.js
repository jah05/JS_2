mainDiv = document.getElementById("content");
function divide() {
  var a = document.getElementById("fnum").value;
  var b = document.getElementById("snum").value;
  var display = document.getElementById("display").checked
  var intdiv = document.getElementById("intdiv").checked
  var enteredU = document.getElementById("usr").value
  var enteredP = document.getElementById("pwd").value
  var usr = "juju"
  var pwd = "corvette corvette"


  if(intdiv) {
    var quotient = parseInt(a/b)
  }
  else {
    var quotient = a/b
  }
  if(usr == enteredU && pwd == enteredP){
    if(display){
      mainDiv.innerHTML = "<p>The quotient of " + a + " and " + b + ":";
    }
    else {
      mainDiv.innerHTML += "<p>The quotient of " + a + " and " + b + ":";
    }
    mainDiv.innerHTML += quotient + "</p>";
  }
  else {
    mainDiv.innerHTML = "Invalid password";
  }
  localStorage.setItem("ans", quotient)
}

function fill() {
  var fnum = document.getElementById("fnum")
  fnum.value = localStorage.getItem("ans");
}
