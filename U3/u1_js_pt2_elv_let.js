
/*var script = document.querySelector("script")[0];  
var att = document.createAttribute("defer");        
att.value = "true";        
script.setAttributeNode(att);*/  

document.addEventListener('DOMContentLoaded', init);

var points = 0;

function init() {
   //✔️ Function that initiates the whole Game application.
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

//init()
      

function initChests(){
   //Creates three chests using for loop and assigns each chest with its own id using the i variable.
   var containerRef = document.getElementById("chests");
   for (let i = 0; i<3; i++) { 
   var chest = document.createElement('img');
   chest.src = "https://raw.githubusercontent.com/SofthouseVxo/Education/master/courses/javascript/assignments/treassure-hunt/images/chest-closed.png";
   chest.setAttribute("id", + i);
   chest.setAttribute("class", "empty");
   chest.addEventListener("click", chestClicked);
     
   containerRef.appendChild(chest);
   
   }
}
 
function initScoreBoard(){
   //Creates a paragraph, appends it to the game-wrapper, and gives it the number of points. 
   var score = document.createElement("p");
   score.id="highscore";
   document.getElementById("game-wrapper").appendChild(score)
   score.innerText = points;
}
 
function initRefreshButton(){
   //Creates refresh button and uses addEventListener to make it refresh on click.
   var refreshbutton = document.getElementById("refresh-button");
   refreshbutton.addEventListener("click", refresh);
}
 

function initChestEventListeners() {
   
}
 
function placeTreassure(){
   //Generates a random number, either 1, 2, or 3. If 1, chest with id 1 gets the classname "hasdiamond".
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

//The "chest"-variables are used in the chestClicked function.
var chest1; //chest with id 0
var chest2; //chest with id 1
var chest3; //chest with id 2
var PexelsJSONResponse; 

function getImageFromPexels(){
   // make a request towards pexels API and get 1 Diamond image ✔️
   let url = "https://api.pexels.com/v1/search?query=diamonds+query&per_page1&page=1";
   var xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   xhr.setRequestHeader('Authorization', '563492ad6f917000010000011df9ef7e9ade426dae001a4f595318a2');
   xhr.addEventListener("load", function() {
      PexelsJSONResponse = JSON.parse(xhr.response); 
   });
   xhr.send();
}

var z;

function chestClicked(e){
   //Provides a different image depending on the classname of the clicked chest. Removes event listeners on click. 
   var target = e.target.id; //target is the number of the chest clicked.
   var targetclass = e.target.className;
   document.getElementById("highscore").innerText = points;
   var image = document.getElementById(target); //image is the chest that gets clicked.
   chest1 = document.getElementById("0");
   chest1.removeEventListener("click", chestClicked);
   chest2 = document.getElementById("1");
   chest2.removeEventListener("click", chestClicked);
   chest3 = document.getElementById("2");
   chest3.removeEventListener("click", chestClicked);
   z = Math.floor((Math.random() * 9) + 1);
   if(targetclass === "hasdiamond"){
      image.src = PexelsJSONResponse.photos[z].src.small;
      points = points + 5;
   } else if (targetclass === "empty"){
      image.src = "https://raw.githubusercontent.com/SofthouseVxo/Education/master/courses/javascript/assignments/treassure-hunt/images/chest-open.png";
   }
   var score = document.querySelector("#highscore");
   score.innerText = points;
}
 
function refresh(){
   //Gives back the chests their eventlisteners and "closes" them.
   document.getElementById("0").setAttribute("class", "empty");
   document.getElementById("1").setAttribute("class", "empty");
   document.getElementById("2").setAttribute("class", "empty");
   placeTreassure();
   console.group();
   console.log(chest1.className);
   console.log(chest2.className);
   console.log(chest3.className);
   console.groupEnd();
   var picture1 = document.getElementById("0");
   picture1.src = "https://raw.githubusercontent.com/SofthouseVxo/Education/master/courses/javascript/assignments/treassure-hunt/images/chest-closed.png";
   var picture2 = document.getElementById("1");
   picture2.src = "https://raw.githubusercontent.com/SofthouseVxo/Education/master/courses/javascript/assignments/treassure-hunt/images/chest-closed.png";
   var picture3 = document.getElementById("2");
   picture3.src = "https://raw.githubusercontent.com/SofthouseVxo/Education/master/courses/javascript/assignments/treassure-hunt/images/chest-closed.png";
   chest1.addEventListener("click", chestClicked);
   chest2.addEventListener("click", chestClicked);
   chest3.addEventListener("click", chestClicked);
   document.getElementById("game-description").innerText = "Select a chest which you think holds the treasure! If you fail press the refresh button to try again. Good luck!"; 
}
 
function removeChestEvents(){
   document.getElementById("0").removeEventListener("click", chestClicked());
   document.getElementById("1").removeEventListener("click", chestClicked());
   document.getElementById("2").removeEventListener("click", chestClicked());  
}


 
