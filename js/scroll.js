// function that takes dive id as parameter and horizontaly scrolls it's own len to the right
function scrollRightByVisible(id) {
    var dive = document.getElementById(id);
    dive.scrollLeft += dive.clientWidth;
}

// function that takes dive id as parameter and horizontaly scrolls it's own len to the left
function scrollLeftByVisible(id) {
    var dive = document.getElementById(id);
    dive.scrollLeft -= dive.clientWidth;
}