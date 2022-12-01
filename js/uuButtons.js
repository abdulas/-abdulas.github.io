



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var elementer = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, figcaption');
function knap1(){
    elementer.forEach(element => {
        element.style.fontSize = 20 + "px";
    });

}


function knap2(){
    elementer.forEach(element => {
        element.style.fontSize = 16 + "px";
    });

}

var allImg = document.querySelectorAll('img');
function knap3(){
    allImg.forEach(element => {
        element.style.filter = "invert(100%)";
    });

}


function knap4(){
window.location.reload();


}
