//Build NavBar dynamically
const NavBar = document.getElementById("navbar__list");
let sectionList = document.querySelectorAll("section");

//Build a "scroll to top" button
const body = document.querySelector("body");
const topButton = document.createElement("button");
topButton.innerHTML = `<button onclick="topFunction()" id="topBtn" title="Go to top">Return to Top</button>`;
body.appendChild(topButton);

mybutton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

//Set NavBar links
function getSectionId(section) {
  return section.id;
}

function getSectionTitle(section) {
  return section.querySelector(".title").innerText;
}

function CreateNavLink(section) {
  const sectionTitle = getSectionTitle(section);
  const sectionId = getSectionId(section);
  const liElement = document.createElement("li");
  liElement.innerHTML = `<a class="nav-link menu__link"> ${sectionTitle} </a>`;
  liElement.classList.add("nav-item", sectionId);
  NavBar.appendChild(liElement);
  liElement.addEventListener("click", function (event) {
    event.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
}

sectionList.forEach((section) => {
  CreateNavLink(section);
});

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

// Add class 'active' to section when near top of viewport
function isInViewport (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

let sections = document.querySelectorAll("section");
window.addEventListener(
  "scroll",
  function (event) {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("your-active-class");
      } else {
        section.classList.remove("your-active-class");
      }
    });
  },
  false
);

//Highlight NavBar while section is viewed

let navItemList = document.querySelectorAll("ul .nav-item");

window.addEventListener("scroll", () => {
  let sectionId = "";
  sectionList.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      sectionId = getSectionId(section);
    }
  });

  navItemList.forEach((li) => {
    if (li.classList.contains(sectionId)) {
      li.classList.add("active_nav");
    } else {
      li.classList.remove("active_nav");
    }
  });
});
