let modal = document.getElementById("myModal");
let btn = document.getElementById("trigger");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// to avoid repetition in our code we can use element.classList.toggle("mystyle"); 
// you can take a look in MDN (https://developer.mozilla.org/) about toggle and how to use it.

// bare in mind when selecting document.getElementsByClassName("close")[0] like this there is a chance that the array could change, so the index may be different
// for selectors of HTML elements I use:
// document.querySelectorAll('.close')[0]
// let modal = document.querySelector("#myModal"); (you may find it easier) and if you want to select multiple querySelectorAll('elementClass'/'elementID')