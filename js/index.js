// Add active class to the current button (highlight it)
//let header = document.getElementById("menu-items");
let btns = document.getElementsByClassName("mn");
let items = btns.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  })
};

