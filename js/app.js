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

}

Player.prototype.handleInput = function() {


};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//i create an empty array called allEnemies and make for loop to make enemies and with creation the instance 
// i push the instance in the array
var allEnemies = [];

for (var i = 2 ; i >= 0; i--) {
    speed = (i+1.2)*30;
    y = (i+1)*77;
   var bug = new Enemy(0,y,speed);
    allEnemies.push(bug);
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

// collision checking idea (not complete)
// Player.prototype.checkCollisions = function() {
// for (var i = 0; i < allEnemies.length; i++) {
// if (allEnemies[i].x < this.x + this.width &&
// allEnemies[i].x + allEnemies[i].width > this.x &&
// allEnemies[i].y < this.y + this.height &&
// allEnemies[i].height + allEnemies[i].y > this.y) {
// // we will reset the game
// this.reset(); // still didn't write it
// }

// //check reaching the water
// else if (this.y <= ??) {
// this.reset(); 
// }
// }};

