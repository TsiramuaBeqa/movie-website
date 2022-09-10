const movieContent = document.querySelector(".movie-content");
for(let i = 0; i < 30; i++) {
  let movies = document.createElement("div")
  movies.classList.add("movies")
  movieContent.appendChild(movies)
}

const movie = document.querySelectorAll(".movies")
for (let i = 0; i < movie.length; i++) {
  movie[i].style.backgroundImage = `url("img/movie-${i}.jpg")`
}


const input  = document.querySelector(".header-middle-part")
const logIn = document.querySelector(".header-right-part")
const header = document.querySelector("header")
const sidebar = document.querySelector(".sidebar")
const body = document.querySelector("body")
const hamburger = document.querySelector(".hamburger")
let counter = 1
hamburger.addEventListener("click", function() {
  counter++
  if (counter % 2 == 0) {
    input.style.display = "block"
    header.style.height = "100vh"
    body.style.overflow = "hidden"
    sidebar.style.display = "block"
    logIn.style.display = "block"
  } else {
    input.style.display = "none"
    header.style.height = "100px"
    body.style.overflow = "auto"
    sidebar.style.display = "none"
    logIn.style.display = "none"
  }
})

const filmCategories = document.querySelector(".film-categories")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    filmCategories.style.display = "none"
    
  } else {
    filmCategories.style.display = "block"
  }
}