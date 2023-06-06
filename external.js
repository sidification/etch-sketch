const container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
  const sqRow = document.createElement("div")
  sqRow.setAttribute("class", "square-row")
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div")
    square.setAttribute("class", "square")
    sqRow.appendChild(square)
  }
  container?.appendChild(sqRow)
}

const squares = document.querySelectorAll('.square')
// console.log(square.length)
squares.forEach((square) => {
  square.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
  })
});
