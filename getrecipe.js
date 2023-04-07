var name="";
var ingredients=[];
var instruction="";

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript('server.js');


function getrecipe() {
  name = document.getElementById("name").value;
  ingredients = document.getElementById("ingredients").value;
  instruction = document.getElementById("instruction").value;
  document.getElementById("mydata").innerHTML = "Your ingredients for "+name+" are: "+ingredients+"\n and Your instruction is: "+instruction;
}

function confirmit() {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {

    //here send ingredients and instruction to server and save it
    var newArrIng=[ingredients];
    var newArrRec=[name, recipe];
    ingredients.push(newArrIng);
    recipe.push(newArrRec);
    text = "Your recipe is saved!";
  } else {
    text = "Your recipe is not saved!";
  }
  document.getElementById("demo").innerHTML = text;
}
