function randomBG() {
    var i;
    //var body = document.getElementsByTagName("body");
    var imgs = document.getElementsByClassName("slideshow-image-page");
    var numImages = imgs.length;
    var randomNum = Math.floor(Math.random() * numImages);
    var imgURL = imgs[randomNum].src;
    //document.write(imgURL);

    //Use a div to display background image
    //Use absolute pos on the slide image to display it properly
    var bgImg = document.getElementById("bgImg");
    bgImg.src = imgURL;
}