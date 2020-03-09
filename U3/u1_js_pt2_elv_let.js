var points = 0;

// Function that initiates the whole Game application.
function init() {
   //✔️
   initGameUI();
}

function initGameUI() {
   // ✔️ Call functions that creates the Game UI
   initChestEventListeners();
   initChests();
   initScoreBoard();
   initRefreshButton();
   getImageFromPexels();
}

init();
 
function initChests(){
   //✔️
   for (let i = 0; i<3; i++) { 
   var chest = document.createElement('img');
   chest.src = "chest-closed.png";
   chest.setAttribute("id", + i);
   chest.setAttribute("class", "empty");
   console.log(chest.id);
   chest.addEventListener("click", chestClicked);
   
   var containerRef = document.getElementById("chests");

   containerRef.appendChild(chest);
   
   }
}
 
function initScoreBoard(){
   //✔️
   var score = document.createElement("p");
   score.id="highscore";
   document.getElementById("game-wrapper").appendChild(score)
   score.innerText = points;
}
 
function initRefreshButton(){
   //✔️
   console.log("initRefreshButton works");
   var refreshbutton = document.getElementById("refresh-button");
   refreshbutton.addEventListener("click", refresh);
}
 

function initChestEventListeners() {
   
}
 
function placeTreassure(){
   //✔️
   var z = 0;
   z = Math.floor((Math.random() * 3) + 1);
    switch(z) {
     case (z = 1): {
        document.getElementById("0").className = "hasdiamond";
        break;
     }   
     case (z = 2): {
        document.getElementById("1").className = "hasdiamond";
        break;
      }   
     case (z = 3): {
        document.getElementById("2").className = "hasdiamond";
        break;
     }   
     default: 
}
}

var chest1;
var chest2;
var chest3;
var imagePexels;
var x;
 
function getImageFromPexels(){
   let xhr = new XMLHttpRequest();

   xhr.open('GET', 'https://api.pexels.com/v1/search?query=diamonds+query&per_page1&page=1', true);
   xhr.setRequestHeader('Authorization', '563492ad6f917000010000011df9ef7e9ade426dae001a4f595318a2');
   //xhr.responseType = JSON;

   xhr.addEventListener('load', function(x, imagePexels){
    if (this.readyState == 4 && this.status == 200) {
      console.log(this);
      //console.log(this.responseText); 
      imagePexels = JSON.parse(this.responseText); 
      x = imagePexels.slice(100, 171); //This cuts out the image url from the JSON response.
      console.log(x);
      //e.target.src = x;
    }
    return x;
   });
   xhr.send();
}

var imagedata = getImageFromPexels;
var imagelink = imagedata.x;

function chestClicked(e){
   //✔️
   var target = e.target.id;
   var targetclass = e.target.className;
   points = points + 5;
   console.log(target);
   console.log(targetclass);
   document.getElementById("highscore").innerText = points;
   var image = document.getElementById(target);
   chest1 = document.getElementById("0");
   chest1.removeEventListener("click", chestClicked);
   chest2 = document.getElementById("1");
   chest2.removeEventListener("click", chestClicked);
   chest3 = document.getElementById("2");
   chest3.removeEventListener("click", chestClicked);
   switch(targetclass){
      case (targetclass = "hasdiamond"):
       image.src = imagelink;
       break;
      case (targetclass = "empty"):
       image.src = "chest-open.png"; 
       break;
   }
}
 
function refresh(){
   //✔️
   console.log("Refresh works");
   placeTreassure();
   var picture1 = document.getElementById("0");
   picture1.src = "chest-closed.png";
   var picture2 = document.getElementById("1");
   picture2.src = "chest-closed.png";
   var picture3 = document.getElementById("2");
   picture3.src = "chest-closed.png";
   chest1.addEventListener("click", chestClicked);
   chest2.addEventListener("click", chestClicked);
   chest3.addEventListener("click", chestClicked);
   document.getElementById("game-description").innerText = "Select a chest which you think holds the treasure! If you fail press the refresh button to try again. Good luck!"; 
}
 
function removeChestEvents(){
   //✔️
   document.getElementById("0").removeEventListener("click", chestClicked());
   document.getElementById("1").removeEventListener("click", chestClicked());
   document.getElementById("2").removeEventListener("click", chestClicked());  
}
