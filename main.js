const slide1 = document.getElementById("slide-1")
const slide2 = document.getElementById("slide-2")
const previousButton = document.querySelectorAll(".previous")
const nextButton = document.querySelectorAll(".next")

console.log(previousButton)

const changeSlide = (button) => {
  button.forEach((btn) => {
    btn.addEventListener("click", () => {
      slide1.classList.toggle("hidden")
      slide2.classList.toggle("hidden")
      slide1.classList.toggle("grid")
      slide2.classList.toggle("grid")
    })
  })
}

changeSlide(previousButton)
changeSlide(nextButton)
