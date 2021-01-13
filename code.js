mainDiv = document.getElementById("content");
function divide() {
  var a = document.getElementById("fnum").value;
  var b = document.getElementById("snum").value;
  var display = document.getElementById("display").checked;
  var intdiv = document.getElementById("intdiv").checked;
  var enteredU = document.getElementById("usr").value;
  var enteredP = document.getElementById("pwd").value;
  var usr = "juju";
  var pwd = "tiktok";
  var remember = document.getElementById("mem").checked;

  var data = {
    "a":a,
    "b":b,
    "display": display,
    "intdiv": intdiv,
    "enteredU":enteredU,
    "enteredP":enteredP,
    "usr":usr,
    "pwd":pwd,
    "remember":remember
  };

  if(data["intdiv"]) {
    data["quotient"] = parseInt(data["a"]/data["b"]);
  }
  else {
    data["quotient"] = data["a"]/data["b"];
  }
  console.log(data["usr"]);
  console.log(data["pwd"]);
  console.log(data["enteredU"]);
  console.log(data["enteredP"]);
  if(data["usr"] == data["enteredU"] && data["pwd"] == data["enteredP"]){
    if(data["display"]){
      mainDiv.innerHTML = "<p>The quotient of " + data["a"] + " and " + data["b"] + ":";
    }
    else {
      mainDiv.innerHTML += "<p>The quotient of " + data["a"] + " and " + data["b"] + ":";
    }
    mainDiv.innerHTML += data["quotient"] + "</p>";
  }
  else {
    mainDiv.innerHTML = "Invalid password";
  }
  localStorage.setItem("data", JSON.stringify(data));
  console.log(JSON.stringify(data));
}

function autofill() {
  data = JSON.parse(localStorage.getItem("data"));
  console.log(data)
  if(data["remember"]){
    document.getElementById("fnum").value = data["quotient"];
    document.getElementById("usr").value = data["enteredU"];
    document.getElementById("pwd").value = data["enteredP"];
    document.getElementById("display").value = data["display"];
    document.getElementById("intdiv").value = data["intdiv"];
  }
}
