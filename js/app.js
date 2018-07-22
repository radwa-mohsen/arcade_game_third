// Enemies our player must avoid


var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 50;
    this.height = 50;
    
   
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
// update the new location
    this.x += this.speed * dt;
   
   if (this.x > 527) {
               this.x = 0;
           }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
     this.width = 75;
    this.height = 75;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.update = function(){
	
for (var i = 0; i < allEnemies.length; i++) {
if (allEnemies[i].x < this.x + this.width &&
allEnemies[i].x + allEnemies[i].width > this.x &&
allEnemies[i].y < this.y + this.height &&
allEnemies[i].height + allEnemies[i].y > this.y) {
this.x = 200;
this.y = 400;
}}
if(win){
	
this.x = 200;
this.y = 400;
win = false;

}}

// make the boundries for the player to make sure it's not get out from the screen
var win = false;
Player.prototype.handleInput = function(keyValue) {
if (keyValue === 'up' ) {
    
    if(this.y >= -15){
    	
      this.y -= 83;
      if(this.y == -15){
   	
    	alert("win")
        win = true;
    	 player.update();
    }
    }
   
}

if (keyValue === 'down') {

	if(this.y<(400)){
		
		 this.y += 83;
	}
   
}

if (keyValue === 'right') {

   if(this.x < 400){
   	
		 this.x += 100;
	}
}

if (keyValue === 'left' ) {

   if(this.x > 0){
    	
      this.x -= 100;
    }
}
};

//collision checking idea (not complete)
//ar collision = false;
//Player.prototype.checkCollisions = function() {
//}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//i create an empty array called allEnemies and make for loop to make enemies and with creation the instance 
// i push the instance in the array
var allEnemies = [];

for (var i = 5 ; i >= 0; i--) {
	if(i<=2){
		speed = (i+1)*55;
    y = (i+1)*77;
   var bug = new Enemy(0,y,speed);
    allEnemies.push(bug);
	}
		else{
	speed = i*70;
    y = (i-2)*77;
    x= i*20*22/7 +53;
   var bug = new Enemy(x,y,speed);
    allEnemies.push(bug);
}
    

}
// create instance of the playerobject
var player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



