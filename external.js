const sketchContainer = document.querySelector(".sketch-container")
let sliderVal = 75;
let hoverColor = 'black';
createSketchPad(sliderVal); 
const squares = document.querySelectorAll('.square')

function createSketchPad(sliderVal) {
  for (let i = 0; i < sliderVal; i++) {
    const sqRow = document.createElement("div")
    sqRow.setAttribute("class", "square-row")
    for (let j = 0; j < sliderVal; j++) {
      const squares = document.createElement("div")
      squares.setAttribute("class", "square")
      sqRow.appendChild(squares)
    }
    sketchContainer?.appendChild(sqRow)
  }
  const squares = document.querySelectorAll('.square')
  squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = hoverColor;
  })
});
}

function clear() {
  const squares = document.querySelectorAll('.square')
  squares.forEach((square) => {
    square.style.backgroundColor = 'white';
})
};

//get children of scale which includes the buttons
const scaleBtns = document.querySelectorAll('.scale-container button')
scaleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.textContent == 'Small') {
      sliderVal = 75;
    } 
    else if (btn.textContent == 'Medium') {
      sliderVal = 50;
    }
    else {
      sliderVal = 25;
    };
  sketchContainer.replaceChildren();
  createSketchPad(sliderVal);
  })});

// color button
const colors = document.getElementById('colors')
colors.addEventListener('input', (e) => {
  hoverColor = e.target.value;
})


// clear button
const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', clear);



