song = "";
song2 = "";

function preload()
{
    song = loadSound("The-Avengers-Theme-Song.mp3");
    song2 = loadSound("Star Wars- The Imperial March (Darth Vader's Theme).mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();


}

function draw() {
    image(video, 0,0,600,500);
}

function play()
{
    song.play();
}
