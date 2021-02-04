var mainDiv = document.getElementById("content");

function setUpStorage(){
  /*
    Purpose: Sets up and formats storage if it is empty.
    Inputs: none
    Returns: none, but modifies local storage
  */
  if (localStorage.getItem("data") === null) { // if local storage is empty create list for iteration and mutation
    var data = {"list":[]}
    localStorage.setItem("data", JSON.stringify(data))
  }
}

function clearHistory(){
  /*
    Purpose: Clears history of inputs, outputs and local storage
    Inputs: none
    Returns: none, but modifies local storage
  */
  localStorage.clear();
  document.location.reload();
}

function divide() {
  /*
    Purpose: Does a certain type of division while checking for login password and username.
    Inputs: None, but uses input from HTML input elements.
    Returns: none, but modifies local storage
  */

  // get values
  var a = document.getElementById("fnum").value;
  var b = document.getElementById("snum").value;
  var display = document.getElementById("display").checked;
  var intdiv = document.getElementById("intdiv").checked;
  var enteredU = document.getElementById("usr").value;
  var enteredP = document.getElementById("pwd").value;
  var usr = "james";
  var pwd = "01234";
  var remember = document.getElementById("mem").checked;

  // create JSON of values for future reference
  var currData = {
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

  if(currData["intdiv"]) {
    currData["quotient"] = parseInt(currData["a"]/currData["b"]);
  }
  else {
    currData["quotient"] = currData["a"]/currData["b"];
  }

  // verifies passwords
  if(currData["usr"] == currData["enteredU"] && currData["pwd"] == currData["enteredP"]){
    if(currData["display"]){
      mainDiv.innerHTML = "<p>The quotient of " + currData["a"] + " and " + currData["b"] + ":";
    }
    else {
      mainDiv.innerHTML += "<p>The quotient of " + currData["a"] + " and " + currData["b"] + ":";
    }
    mainDiv.innerHTML += currData["quotient"] + "</p>";
  }
  else {
    mainDiv.innerHTML = "Invalid password";
    // deny access to value due to bad login
    currData["remember"] = false;
  }

  // append and store to history for future reuse
  data = JSON.parse(localStorage.getItem("data"));
  data["list"].push(currData);
  localStorage.setItem("data", JSON.stringify(data));
}

function autofill(n) {
  /*
    Purpose: Auto-fills the n-th entry in the history of inputs.
    Inputs: The index of the desired element.
    Returns: none, but modifies HTML.
  */
  data = JSON.parse(localStorage.getItem("data"))["list"][n];
  // checks if display is allowed
  document.getElementById("fnum").value = data["quotient"];
  document.getElementById("snum").value = data["b"];
  document.getElementById("usr").value = data["enteredU"];
  document.getElementById("pwd").value = data["enteredP"];
  document.getElementById("display").checked = data["display"];
  if(data["intdiv"]) {
    document.getElementById("intdiv").checked = true;
  }
  else {
    document.getElementById("ndiv").checked = true;
  }
}

function previousData() {
  /*
    Purpose: Displays previous inputs with corresponding buttons that auto fills the calculator.
    Inputs: none
    Returns: none
  */
  data = JSON.parse(localStorage.getItem("data"))["list"];
  var counter = 1;
  // generate previous inputs with corresponding buttons that auto-fill the specified data
  for(var i=0; i<data.length; i++) {
    if(data[i]["remember"]){
      mainDiv.innerHTML += "<br />\n";
      mainDiv.innerHTML += "<p>Entry #" + counter + "</p>";
      mainDiv.innerHTML += "a:" + data[i]["a"] + " b:" + data[i]["b"] + " ans: " + data[i]["quotient"];
      var b = document.createElement("BUTTON");
      var bt = document.createTextNode("autofill");
      mainDiv.innerHTML += "<button onclick='autofill(" + i +")'> auto-fill</button>";
      counter++; // only increase counter when we want to display the input
    }
  }
}
