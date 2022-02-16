/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const NavBar = document.getElementById("unordered-list")
let sectionList = document.querySelectorAll("section");
const body = document.querySelector("body")
const topButton= document.createElement("button");
topButton.innerHTML= `<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>`
body.appendChild(topButton);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getSectionId(section){
  return section.id
}

function getSectionTitle(section){
    return section.querySelector(".title").innerText
  }

function CreateNavLink(sectionId, sectionTitle){
    const liElement = document.createElement("li")
    //const aElement = document.createElement("a")
    //aElement.innerHTML = `<a href ="#${sectionId}"> ${sectionTitle} </a>`
    //liElement.appendChild(aElement)
    liElement.innerHTML = `<a href ="#${sectionId}" class="nav-link"> ${sectionTitle} </a>`
    liElement.classList.add("nav-item")
    NavBar.appendChild(liElement)
  }

// When the user scrolls down, show the button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
sectionList.forEach(section => {
    // get section id
    const sectionId = getSectionId(section)
    // get section title
    const sectionTitle = getSectionTitle(section)
    // create a navlink with the title and id
    CreateNavLink(sectionId, sectionTitle)
    })

// build the nav


// Add class 'active' to section when near top of viewport

let isInViewport = function(elem) {
    let distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  let findMe = document.querySelectorAll("section");
  
  window.addEventListener('scroll', function(event) {
  findMe.forEach(element => {

      if (isInViewport(element)) {

        element.classList.add("your-active-class");
      } else {
        element.classList.remove("your-active-class"); 
      }
  });
  }, false);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
