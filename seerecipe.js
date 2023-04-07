function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript('server.js');

function printarray(){
  var len = recipe.length;
  var i=0;
  var k=ingredients[i].toString();
  // for(let i=0; i<recipe.length();i++){
  document.getElementById("name").innerHTML = recipe[i][0];
  document.getElementById("ingredients").innerHTML = k;
  document.getElementById("recipe").innerHTML = recipe[i][1];

// }
  // <div class="row">
  //   <div class="column">
  //     <div class="card">
  //       <div class="container">
  //         <h2 id="name"></h2>
  //         <p id="ingredients"></p>
  //         <p id="recipe"></p>
  //       </div>
  //     </div>
  //   </div>
}
