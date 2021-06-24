canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


car1Width=120;
car1Height=70;
car1X=10;
car1Y=10;
car1Image="https://i.postimg.cc/YqdnnNX1/car1.png";

car2Width=120;
car2Height=70;
car2X=10;
car2Y=100;
car2Image="https://i.postimg.cc/tnnW1Kff/car2.png";

backgroundImage="https://i.postimg.cc/bv5d35nK/racing.jpg";


function add(){
    backgroundImg=new Image();
    backgroundImg.onload=uploadBackground;
    backgroundImg.src=backgroundImage;

    car1Img=new Image();
    car1Img.onload=uploadCar1;
    car1Img.src=car1Image;

    car2Img=new Image();
    car2Img.onload=uploadCar2;
    car2Img.src=car2Image;
}

function uploadBackground(){
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  
}

function uploadCar1(){
    ctx.drawImage(car1Img, car1X, car1Y, car1Width, car1Height);  
}

function uploadCar2(){
    ctx.drawImage(car2Img, car2X, car2Y, car2Width, car2Height);  
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    if(keyPressed=="38"){
        car1up();
        console.log("Up Arrow Pressed");
    }

    if(keyPressed=="40"){
        car1down();
        console.log("Down Arrow Pressed");
    }

    if(keyPressed=="37"){
        car1left();
        console.log("Left Arrow Pressed");
    }

    if(keyPressed=="39"){
        car1right();
        console.log("Right Arrow Pressed");
    }

    if(keyPressed=="87"){
        car2up();
        console.log("W Key Pressed");
    }

    if(keyPressed=="83"){
        car2down();
        console.log("S Key Pressed");
    }

    if(keyPressed=="65"){
        car2left();
        console.log("A Key Pressed");
    }

    if(keyPressed=="68"){
        car2right();
        console.log("D Key Pressed");
    }
    if(car1X>700){
        document.getElementById('game_status').innerHTML = "Car 1 Won!!";
    }
else if(car2X>700){
    document.getElementById('game_status').innerHTML = "Car 2 Won!!";
}
    
}

function car1up(){
    if(car1Y>=10){
        car1Y=car1Y-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car1down(){
    if(car1Y<=500){
        car1Y=car1Y+10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car1left(){
    if(car1X>=10){
        car1X=car1X-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();    }
}


function car1right(){
    if(car1X<=700){
        car1X=car1X+10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car2up(){
    if(car2Y>=10){
        car2Y=car2Y-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car2down(){
    if(car2Y<=500){
        car2Y=car2Y+10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car2left(){
    if(car2X>=10){
        car2X=car2X-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();    }
}


function car2right(){
    if(car2X<=700){
        car2X=car2X+10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}