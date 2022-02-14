//Build the menu dynamically

let navItems = document.getElementById("unordered-list");
const items = document.getElementsByClassName("landing__container");
let itemsCount = items.length;

for (i = 1; i < itemsCount + 1; i++) {
  let item = "#section" + i + "-title";
  let itemValue = document.querySelector(item);
  let itemText = itemValue.textContent;
  let newLine = document.createElement("li");
  let lineText = document.createTextNode(itemText);
  let listItem = "sample-nav-" + i;
  newLine.setAttribute("id", listItem);
  newLine.setAttribute("class", "nav-list-item");
  newLine.appendChild(lineText);
  navItems.appendChild(newLine);

  let sectionTarget = document.getElementById("section" + i);
  let listTarget = document.getElementById(listItem);
  let buttonName = "section" + i + "-button";
  let buttonToAdd = document.getElementById(buttonName);

   //Scrolling on clicking on NavBar
  listTarget.addEventListener("click", function() {
    sectionTarget.scrollIntoView ()
    //Adds a button after scrolling
    buttonToAdd.innerHTML =
      "<button class='section-button' onclick='goToTop()'>Return to Top</button>";
  });
}


// On button click, goes to top of page 
function goToTop() {
scrollToTop();

  for (i = 1; i < itemsCount + 1; i++) {
    let buttonToDelete = document.getElementById("section" + i + "-button");
    buttonToDelete.innerHTML = "";
  }
}

//Checks if section is in view and adds active-class with moving background and color change
function checkSectionView() {
  let isInViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < itemsCount + 1; i++) {
    let sectionInFullView = document.getElementById("section" + i);

    window.addEventListener(
      "scroll",
      function(event) {
        if (isInViewport(sectionInFullView)) {
          sectionInFullView.classList.add("your-active-class");
        } else {
          sectionInFullView.classList.remove("your-active-class");
        }
      },
      false
    );
  }
}

//Add sticky header as per review (Used tutorial here: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp)

// When the user scrolls the page, execute myFunction
window.onscroll = function() {staySticky()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function staySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
checkSectionView();