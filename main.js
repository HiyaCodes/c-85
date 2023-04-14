canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_images_array = ["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"]
random_num = Math.floor(Math.random()*4)

var rover_width = 100;
var rover_height = 90;
var background_image = nasa_images_array[random_num]
var rover_image = "rover.png"
roverX = 10
roverY = 10


function add() {
    background_img_tag = new Image()
    background_img_tag.onload = uploadBackground
    background_img_tag.src = background_image

    rover_img_tag = new Image()
    rover_img_tag.onload = uploadRover
    rover_img_tag.src = rover_image

}
function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height)

}
function uploadRover() {
    ctx.drawImage(rover_img_tag, roverX, roverY, rover_width, rover_height)
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == '38') {
        up()
        console.log("up")
    }

    if (keyPressed == '40') {
        down()
        console.log("down")
    }

    if (keyPressed == '37') {
        left()
        console.log("left")
    }

    if (keyPressed == '39') {
        right()
        console.log("right")
    }
}


function up(){
if (roverY >=0) 
{
    roverY=roverY - 10
    console.log("when up arrow is pressed x ="+ roverX+ "Y=" + roverY)
    uploadBackground()
    uploadRover()
}
}

function down(){
    if (roverY <=600) 
    {
        roverY=roverY + 10
        console.log("when down arrow is pressed x ="+ roverX+ "Y=" + roverY)
        uploadBackground()
        uploadRover()
    }
    }


    function left(){
        if (roverX >=0) 
        {
            roverX=roverX - 10
            console.log("when down arrow is pressed x ="+ roverX+ "Y=" + roverY)
            uploadBackground()
            uploadRover()
        }
        }

        function right(){
            if (roverX <=800) 
            {
                roverX=roverX + 10
                console.log("when down arrow is pressed x ="+ roverX+ "Y=" + roverY)
                uploadBackground()
                uploadRover()
            }
            }
