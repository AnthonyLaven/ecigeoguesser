// db of all the images we had
const imagesDB = [
    {"name": "01", "url": "schoolPics/01.jpg", "xPercent": 52.6448, "yPercent": 68.5819, "floorNum": 1},
    {"name": "02", "url": "schoolPics/02.jpg", "xPercent": 52.5005, "yPercent": 71.9412, "floorNum": 1},
    {"name": "03", "url": "schoolPics/03.jpg", "xPercent": 34.06, "yPercent": 45.54, "floorNum": 0},
    {"name": "04", "url": "schoolPics/04.jpg", "xPercent": 36.16, "yPercent": 48.802, "floorNum": 0},
    {"name": "05", "url": "schoolPics/05.jpg", "xPercent": 41.098, "yPercent": 60.429, "floorNum": 0},
    {"name": "06", "url": "schoolPics/06.jpg", "xPercent": 40.649, "yPercent": 50.0264, "floorNum": 0},
    {"name": "07", "url": "schoolPics/07.jpg", "xPercent": 38.1036, "yPercent": 45.539, "floorNum": 0},
    {"name": "08", "url": "schoolPics/08.jpg", "xPercent": 37.504, "yPercent": 55.737, "floorNum": 0},
    {"name": "09", "url": "schoolPics/09.jpg", "xPercent": 37.654, "yPercent": 61.041, "floorNum": 0},
    {"name": "10", "url": "schoolPics/10.jpg", "xPercent": 39.3, "yPercent": 69.4, "floorNum": 0},
    {"name": "11", "url": "schoolPics/11.jpg", "xPercent": 33.01, "yPercent": 71.44, "floorNum": 0},
    {"name": "12", "url": "schoolPics/12.jpg", "xPercent": 16.54, "yPercent": 73.075, "floorNum": 0},
    {"name": "13", "url": "schoolPics/13.jpg", "xPercent": 55.12, "yPercent": 68.16, "floorNum": 1},
    {"name": "14", "url": "schoolPics/14.jpg", "xPercent": 33.48, "yPercent": 68.38, "floorNum": 1},
    {"name": "15", "url": "schoolPics/15.jpg", "xPercent": 45.29, "yPercent": 68.18, "floorNum": 1},
    {"name": "15", "url": "schoolPics/15.jpg", "xPercent": 45.29, "yPercent": 68.18, "floorNum": 1},
    {"name": "17", "url": "schoolPics/17.jpg", "xPercent": 46.78, "yPercent": 68.4, "floorNum": 1},
    {"name": "18", "url": "schoolPics/18.jpg", "xPercent": 44.69, "yPercent": 68.38, "floorNum": 1},
    {"name": "19", "url": "schoolPics/19.jpg", "xPercent": 59.51, "yPercent": 68.58, "floorNum": 1},
    {"name": "20", "url": "schoolPics/20.jpg", "xPercent": 65.95, "yPercent": 65.94, "floorNum": 1},
    {"name": "21", "url": "schoolPics/21.jpg", "xPercent": 73.89, "yPercent": 65.53, "floorNum": 1},
    {"name": "22", "url": "schoolPics/22.jpg", "xPercent": 86, "yPercent": 67.16, "floorNum": 1},
    {"name": "23", "url": "schoolPics/23.jpg", "xPercent": 90.21, "yPercent": 65.12, "floorNum": 2},
    {"name": "24", "url": "schoolPics/24.jpg", "xPercent": 71.79, "yPercent": 64.96, "floorNum": 2},
    {"name": "25", "url": "schoolPics/25.jpg", "xPercent": 65.65, "yPercent": 66.34, "floorNum": 2},
    {"name": "26", "url": "schoolPics/26.jpg", "xPercent": 58.91, "yPercent": 68.18, "floorNum": 2},
    {"name": "27", "url": "schoolPics/27.jpg", "xPercent": 50.53, "yPercent": 69, "floorNum": 2},
    {"name": "28", "url": "schoolPics/28.jpg", "xPercent": 47.98, "yPercent": 68.38, "floorNum": 2},
    {"name": "29", "url": "schoolPics/29.jpg", "xPercent": 41.4, "yPercent": 66.12, "floorNum": 2},
    {"name": "30", "url": "schoolPics/30.jpg", "xPercent": 38.55, "yPercent": 66.95, "floorNum": 2},
    {"name": "31", "url": "schoolPics/31.jpg", "xPercent": 17.89, "yPercent": 65.52, "floorNum": 2},
    {"name": "32", "url": "schoolPics/32.jpg", "xPercent": 16.7, "yPercent": 49, "floorNum": 2},
    {"name": "33", "url": "schoolPics/33.jpg", "xPercent": 6.36, "yPercent": 47.98, "floorNum": 3},
    {"name": "34", "url": "schoolPics/34.jpg", "xPercent": 15.04, "yPercent": 49.82, "floorNum": 3},
    {"name": "35", "url": "schoolPics/35.jpg", "xPercent": 32.7, "yPercent": 50.026, "floorNum": 3},
    {"name": "36", "url": "schoolPics/36.jpg", "xPercent": 31.36, "yPercent": 47.78, "floorNum": 3},
    {"name": "37", "url": "schoolPics/37.jpg", "xPercent": 35.7, "yPercent": 50.43, "floorNum": 3},
    {"name": "38", "url": "schoolPics/38.jpg", "xPercent": 50.83, "yPercent": 45.74, "floorNum": 3},
    {"name": "39", "url": "schoolPics/39.jpg", "xPercent": 52.03, "yPercent": 46.96, "floorNum": 3},
    {"name": "40", "url": "schoolPics/40.jpg", "xPercent": 64, "yPercent": 49.82, "floorNum": 3},
    {"name": "41", "url": "schoolPics/41.jpg", "xPercent": 68.94, "yPercent": 48.94, "floorNum": 3},


]

//declaring variables
let imageLocation = {xPercent: 0, yPercent: 0, floorNum: 1};
let userFloor = 1;
let round = 0;
let score = 0;
const mapContainer = document.getElementById("map-container");
const map = document.getElementById("schoolmap");
let activeWaypointUser = null;
let activeWaypointAnswer = null;
let point = null;


//all info about a point on the map relative to the top left corner of the map
class pointOnMap{
    //x and y pixels, percentages and meters from the top left of the image.
    constructor(e, img){
        const rect = img.getBoundingClientRect();

        // Position of click inside the image (CSS pixels)
        this.xPixels = e.clientX - rect.left; //e.clientX shows the pixel count of cursor in realtion to the whole screen
        this.yPixels = e.clientY - rect.top; // rect.left shows how far from the left side of the screen the image starts

        // Normalized (0–1)
        this.xPercent = this.xPixels / rect.width * 100;
        this.yPercent = this.yPixels / rect.height * 100;

        //get the meters
        this.xMeters = this.xPercent * 1.70;
        this.yMeters = this.yPercent * 1.235;
    }
}

//When the user clicks new round button
function newRound(){
    if (activeWaypointAnswer) {
            activeWaypointAnswer.remove();
        }
    document.getElementById("map-container").classList.remove("active");
    document.getElementById("white-overlay").classList.remove("active");
    document.getElementById("after-guess-info").classList.remove("active");

    //if it is going to be the start of a new round
    if (round == 0){
        score = 0;
        var randomElement = imagesDB[Math.floor(Math.random() * imagesDB.length)];
        let url = randomElement.url;
        document.body.style.backgroundImage = "url('" + url + "')";
        imageLocation.xPercent = randomElement.xPercent;
        imageLocation.yPercent = randomElement.yPercent;
        imageLocation.floorNum = randomElement.floorNum;
        round = round + 1;
    }

    //else just a normal new round
    else{
        //code to make a new background image
        var randomElement = imagesDB[Math.floor(Math.random() * imagesDB.length)];
        let url = randomElement.url;
        document.body.style.backgroundImage = "url('" + url + "')";
        imageLocation.xPercent = randomElement.xPercent;
        imageLocation.yPercent = randomElement.yPercent;
        imageLocation.floorNum = randomElement.floorNum;
        round = round + 1;
    }

    //update round number on screen
    document.getElementById("round-placeholder").textContent = Math.round(round);

}

//When user clicks on the map
mapContainer.addEventListener("click", function(e){

    //make a new point in point class (has info like the pixel, percent, and meters)
    point = new pointOnMap(e, mapContainer);

    // writes the percentage in the top right
    document.getElementById("test").textContent = "X percent = " + point.xPercent + ", Y percent = " + point.yPercent;

    // adds a dot where the user clicked
    if (activeWaypointUser) {
        activeWaypointUser.remove();
    }
    const dot = document.createElement("div");
    dot.className = "waypoint";

    dot.style.left = `${point.xPercent}%`;
    dot.style.top = `${point.yPercent}%`;

    mapContainer.appendChild(dot);
    activeWaypointUser = dot;

    })

// When the user submits a guess
function guess(){
    if(userFloor == imageLocation.floorNum){ // if on the right floor
        //calculate and display the distance of direct line between location and user point
        let xDifference = point.xMeters - (imageLocation.xPercent * 1.70);
        let yDifference = point.yMeters - (imageLocation.yPercent * 1.235);
        let distance = (xDifference ** 2) + (yDifference ** 2);
        distance = Math.sqrt(distance);

        //calculate the points the user got and add it to score
        let points = 0;
        if (distance < 1){
            points = 5000;
        }
        else{
            points = 5000 - (distance * 57.62);  //28.81
        }
        score = score + points;

        //update score in top left
        document.getElementById("score-placeholder").textContent = Math.round(score);
        //update how many km away
        document.getElementById("km-away-text").textContent = "Your guess was " + Math.round(distance) + " meters away";
        //update how many points got
        document.getElementById("points-text").textContent = "You got " + Math.round(points) + " points";

        //make a dot at the actual location
        if (activeWaypointAnswer) {
            activeWaypointAnswer.remove();
        }
        const dot = document.createElement("div");
        dot.className = "waypoint";
        dot.style.background = "blue";

        dot.style.left = `${imageLocation.xPercent}%`;
        dot.style.top = `${imageLocation.yPercent}%`;

        mapContainer.appendChild(dot);
        activeWaypointAnswer = dot;


    }
    else{
        document.getElementById("km-away-text").textContent = "Your guess was on the wrong floor :(";
        //update how many points got
        document.getElementById("points-text").textContent = "You got 0 points";
    }

    //adding the classlist "active" in css will start the annimation that makes the map go fullscreen
    document.getElementById("map-container").classList.add('active');
    document.getElementById("white-overlay").classList.add('active');
    document.getElementById("after-guess-info").classList.add('active');






    // if the round is over
    if (round == 5){
        document.getElementById("next-round-button").onclick = endScreen;
    }

}

function endScreen(){
    //go to a new page which shows results (variable score)
    //allows user to play a new round

    localStorage.setItem("finalScore", score); //put the score into localstorage so that the endscreen.js file can use it
    window.location.href = "endscreen.html";
}







//functions to change the floor
function floor0(){
    document.getElementById("schoolmap").src = "images/Level0.png";
    userFloor = 0;
}
function floor1(){
    document.getElementById("schoolmap").src = "images/Level1.png";
    userFloor = 1;
}
function floor2(){
    document.getElementById("schoolmap").src = "images/Level2.png";
    userFloor = 2;
}
function floor3(){
    document.getElementById("schoolmap").src = "images/Level3.png";
    userFloor = 3;
}


newRound();
