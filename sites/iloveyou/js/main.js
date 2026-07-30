// The attributes of the player.
var player = {
    x: 200,
    y: 200,
    x_v: 0,
    y_v: 0,
    jump : true,
    height: 32,
    width: 16
};
    // The status of the arrow keys
var keys = {
    right: false,
    left: false,
    up: false,
};
var touchCoords = {
    x: 0,
    y: 0
}

    // The friction and gravity to show realistic movements    
var gravity = 0.6;
var friction = 0.7;
    // The number of platforms
var num = 5;
    // The platforms
var platforms = [];
    // Function to render the canvas
function rendercanvas(){
    ctx.fillStyle = "#F0F8FF";
    ctx.fillRect(0, 0, 390, 844);
}
const heart = new Image();
heart.src = "heart.png";
function renderheart(){
    ctx.drawImage(heart, 370, 270);
}
const img = new Image();
img.src = "hero.png";
    // Function to render the player
function renderplayer(){
    ctx.fillStyle = "#F08080";
    
    ctx.drawImage(img, (player.x)-16, (player.y)-32);
    
}
    // Function to create platforms
function createplat(){
    for(i = 0; i < num; i++) {
        platforms.push(
        {
            x: 100 * i,
            y: 200 + (30 * i),
            width: 110,
            height: 15
        }
        );
    }
}
    // Function to render platforms
function renderplat(){
    ctx.fillStyle = "#45597E";
    for (var i = platforms.length - 1; i >= 0; i--) {
        ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    }
    
    
}
    // This function will be called when a key on the keyboard is pressed
function keydown(e) {
        // 37 is the code for the left arrow key
    if(e.keyCode == 37) {
        keys.left = true;
    }
        // 37 is the code for the up arrow key
    if(e.keyCode == 38) {
        if(player.jump == false) {
            player.y_v = -10;
        }
    }
        // 39 is the code for the right arrow key
    if(e.keyCode == 39) {
        keys.right = true;
    }
}
    // This function is called when the pressed key is released
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
    }
    if(e.keyCode == 38) {
        if(player.y_v < -2) {
            player.y_v = -3;
        }
    }
    if(e.keyCode == 39) {
        keys.right = false;
    }
} 
function touchCoordinates(e) {
  touchCoords.x = event.touches[0].clientX;
  touchCoords.y = event.touches[0].clientY;
  if (touchCoords.x<195){
    keys.left = true;
  }
  if (touchCoords.x>195){
    keys.right = true;
  }
}
function untouchCoordinates(e) {
  if (touchCoords.x<195){
    keys.left = false;
  }
  if (touchCoords.x>195){
    keys.right = false;
  }
}
function loop() {

    if(player.y > 844){
        player.x = 200;
        player.y = 200;
        player.x_v = 0;
        player.y_v = 0;
        jump = true;
    }
        // If the player is not jumping apply the effect of frictiom
    
    if(player.jump == false) {
        player.x_v *= friction;
    } else {
            // If the player is in the air then apply the effect of gravity
        player.y_v += gravity;
    }
    player.jump = true;
        // If the left key is pressed increase the relevant horizontal velocity
    if(keys.left) {
        player.x_v = -2.5;
    }
    if(keys.right) {
        player.x_v = 2.5;
    }
        // Updating the y and x coordinates of the player
    player.y += player.y_v;
    player.x += player.x_v;
        // A simple code that checks for collions with the platform
    let i = -1;
    for (var j = platforms.length - 1; j >= 0; j--) {
        if(platforms[j].x < player.x && player.x < platforms[j].x + platforms[j].width &&
                platforms[j].y < player.y && player.y < platforms[j].y + platforms[j].height){
                i = j;
            }
    }
    if(player.x > 370){
        newLocation();
    }
    
    if (i > -1){
        player.jump = false;
        player.y = platforms[i].y;    
    }
            // Rendering the canvas, the player and the platforms
    rendercanvas();
    renderplayer();
    renderplat();
    renderheart();
}
function newLocation() {
        window.location.href="next.html";
    }
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.canvas.height = 844;
ctx.canvas.width = 390;
createplat();
    // Adding the event listeners
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
document.addEventListener("touchstart", touchCoordinates);
document.addEventListener("touchend", untouchCoordinates);
document.addEventListener("touchcancel", untouchCoordinates);
setInterval(loop,22);