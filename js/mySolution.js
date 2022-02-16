
/**
 * Define Global Variables
 * 
*/
const NavBar = document.getElementById("unordered-list")
let sectionList = document.querySelectorAll("section");

// Adding a "scroll to top" button
const body = document.querySelector("body")
const topButton= document.createElement("button");
topButton.innerHTML= `<button onclick="topFunction()" id="topBtn" title="Go to top">Return to Top</button>`
body.appendChild(topButton);

/*
 Start Helper Functions
*/
function getSectionId(section){
  return section.id
}

function getSectionTitle(section){
    return section.querySelector(".title").innerText
  }

function CreateNavLink(sectionId, sectionTitle){
    const liElement = document.createElement("li")
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

sectionList.forEach(section => {
    const sectionId = getSectionId(section)
    const sectionTitle = getSectionTitle(section)
    CreateNavLink(sectionId, sectionTitle)
    })

// Add active state to sections in viewport
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


window.onscroll = function() {scrollFunction()};
