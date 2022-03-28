// function that takes dive id as parameter and horizontaly scrolls it's own len to the right
function scrollRightByVisible(id) {
    var dive = document.getElementById(id);
    var max = dive.scrollWidth - dive.clientWidth;

    dive.scrollLeft += dive.clientWidth;

    if (dive.scrollLeft >= max)
        dive.scrollLeft = 0;
}

// function that takes dive id as parameter and horizontaly scrolls it's own len to the left
function scrollLeftByVisible(id) {
    var dive = document.getElementById(id);
    var max = dive.scrollWidth - dive.clientWidth;

    dive.scrollLeft -= dive.clientWidth;

    if (dive.scrollLeft <= 0)
        dive.scrollLeft = max;
}