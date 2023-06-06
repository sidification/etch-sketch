const sketchContainer = document.querySelector(".sketch-container")
let sliderVal = document.querySelector("#slider-val") 

// update value of slider
const mySlider = document.getElementById('mySlider')
mySlider.addEventListener('input', () => {
  sliderVal.textContent = mySlider.value;
})

for (let i = 0; i < sliderVal.textContent; i++) {
  const sqRow = document.createElement("div")
  sqRow.setAttribute("class", "square-row")
  for (let j = 0; j < sliderVal.textContent; j++) {
    const square = document.createElement("div")
    square.setAttribute("class", "square")
    sqRow.appendChild(square)
  }
  sketchContainer?.appendChild(sqRow)
}

const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
  square.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
  })
});


