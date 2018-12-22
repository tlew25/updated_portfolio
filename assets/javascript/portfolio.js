// portfolio.js
// ####################################
// Image Array for Screenshot Gallery 
// ####################################
var images = [
    'assets/images/Screen Shot 2018-12-17 at 12.19.46 PM.jpg', 
    'assets/images/Screen Shot 2018-12-17 at 12.20.45 PM.jpg', 
    'assets/images/Screen Shot 2018-12-17 at 1.23.38 PM.png',
    'assets/images/Screen Shot 2018-12-17 at 1.29.42 PM.png',
    'assets/images/Screen Shot 2018-12-17 at 1.30.20 PM.png',
    'assets/images/Screen Shot 2018-12-17 at 1.26.22 PM.png'
];
// The "num" var takes in the value of 0, marking the the beginning of the array of images.
var num = 0;
// The Function next is bulit into the HTML's "onclick" button using it to transition to the next photo.
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
// Code for Button Sounds for Portfolio
// ####################################
var ding = new Audio();
ding.src = "assets/audio/345271__soneproject__ecofuture2.wav"
// ####################################
