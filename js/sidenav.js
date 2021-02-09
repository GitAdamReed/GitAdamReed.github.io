function addListeners() {
    var img = document.getElementById("navImg");
    img.addEventListener("mouseover", navMouseover);
    img.addEventListener("mouseout", navMouseout);
}

function navMouseover() {
    document.getElementById("navImg").setAttribute("src", "images/compassIconEditYellow.png")
}

function navMouseout() {
    document.getElementById("navImg").setAttribute("src", "images/compassIconEditWhite.png")
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}