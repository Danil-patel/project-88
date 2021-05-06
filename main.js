var canvas= new fabric.Canvas("myCanvas");
hero_height=50;
hero_width=50;
heroX=10;
heroY=10;
var hero_object="";
function player_update() {
    fabric.Image.fromURL("Final_output.png",function(Img){
        hero_object=Img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(150);
        hero_object.set({
            top:heroY,
            left:heroX

        });
        canvas.add(hero_object);
    });
}
var block_object="";
function newImage(getImage) {
    fabric.Image.fromURL(getImage,function(Img){
        block_object=Img;
        block_object.scaleToWidth(hero_width);
        block_object.scaleToHeight(hero_height);
        block_object.set({
            top:heroY,
            left:heroX
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(key) {
    keypress=key.keyCode;
    if(keypress=="80" && key.shiftKey==true) {
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypress=="77" && key.shiftKey==true) {
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
if(keypress=="70") {
    console.log("f");
    newImage("iron_man_face.png");
}
if(keypress=="66") {
    console.log("b");
    newImage("spiderman_body.png");
}
if(keypress=="76") {
    console.log("l");
    newImage("hulk_legs.png");
}
if(keypress=="82") {
    console.log("r");
    newImage("thor_right_hand.png");
}
if(keypress=="72") {
    console.log("h");
    newImage("captain_america_left_hand");
}
if(keypress=="70") {
    console.log("up");
    up();
}
if(keypress=="70") {
    console.log("down");
    down();
}
if(keypress=="70") {
    console.log("right");
    right();
}
if(keypress=="70") {
    console.log("left");
    left();
}
}
function up() {
    if(hero_y>=0) {
        hero_y=hero_y-block_height;
        console.log("block image height = " + block_height);
        console.log("When up arrow key is pressed, X = " + heroX + " , Y = " + heroY);
        canvas.remove(hero_object);
        hero_update();
    }
}
function down() {
    if(hero_y=300) {
        hero_y=hero_y+block_height;
        console.log("block image height = " - block_height);
        console.log("When up arrow key is pressed, X = " + heroX + " , Y = " + heroY);
        canvas.remove(hero_object);
        hero_update();
    }
}
function right() {
    if(hero_x<=550) {
        hero_x=hero_x-block_width;
        console.log("block image width = " + block_width);
        console.log("When up arrow key is pressed, X = " + heroX + " , Y = " + heroY);
        canvas.remove(hero_object);
        hero_update();
    }
}
function right() {
    if(hero_x>=0) {
        hero_x=hero_x+block_width;
        console.log("block image width = " - block_width);
        console.log("When up arrow key is pressed, X = " + heroX + " , Y = " + heroY);
        canvas.remove(hero_object);
        hero_update();
    }
}
