// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x > 505 ? this.x = -80 : this.x = this.x + 1 + dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 435;
    this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    this.update = function() {
        this.x < 404 ? this.x = this.x : this.x = 404;
        this.x > 0 ? this.x = this.x : this.x = 0;
        this.y < 435 ? this.y = this.y : this.y = 435;
        this.y > 0 ? this.y = this.y : this.y = 0;
    };
    this.handleInput = function(keydown) {
        if (keydown === 'up') {
            this.y = this.y - 5;
        } else if (keydown === 'left') {
            this.x = this.x - 5;
        } else if (keydown === 'right') {
            this.x = this.x + 5;
        } else if (keydown === 'down') {
            this.y = this.y + 5;
        }
    };
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(300, 40);
var enemy2 = new Enemy(0, 100);
var enemy3 = new Enemy(250, 180);
var enemy4 = new Enemy(50, 250);
var enemy5 = new Enemy(350, 340);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});