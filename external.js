const container = document.querySelector(".container")

for (let i = 0; i < 4; i++) {
  const sqRow = document.createElement("div")
  sqRow.setAttribute("class", "square-row")
  for (let j = 0; j < 4; j++) {
    const square = document.createElement("div")
    square.setAttribute("class", "square")
    sqRow.appendChild(square)
  }
  container?.appendChild(sqRow)
}
