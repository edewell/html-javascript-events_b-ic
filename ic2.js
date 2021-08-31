

const colors = [
    "blue",
    "red",
    "yellow",
    "brown",
    "orange",
    "purple",
    "black",
    "green",
];

let button = document.querySelectorAll('button');

    button.addEventListener("click", function(evt) {
        
        document.body.style.backgroundColor = colors
        
    });

    