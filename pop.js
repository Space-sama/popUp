var parent = document.querySelector(".modal-parent");

var btn = document.querySelector('button');


var X = document.querySelector('.X');

var section = document.querySelector('section');

btn.addEventListener("click", appear);

function appear() {

    parent.style.display = "block";
    section.style.filter = "blur(7px)";
}

X.addEventListener("click", disappear);

parent.addEventListener("click", disappear2);

function disappear2(e) {
    // this two lines works fine.
    // parent.style.display = "none";
    // section.style.filter = "blur(0px)";

    // OR
    if(e.target.className == "modal-parent"){
        parent.style.display = "none";
        section.style.filter = "blur(0px)";
    }
}



function disappear() {

    
    parent.style.display = "none";
    section.style.filter = "blur(0px)";


}