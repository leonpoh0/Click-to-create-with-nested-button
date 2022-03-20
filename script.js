const buttonJS = document.createElement("button");
buttonJS.innerText = "Click to create";
buttonJS.id = "buttonID";
document.body.appendChild(buttonJS);

let containerCount = 1;

const words = [
  ["orange", "tomato"],
  ["fire engine", "basketball"],
];

document
  .getElementById("buttonID")
  .addEventListener("click", () => printGreyContainer());

function printGreyContainer() {
  const containerJS = document.createElement("div");
  containerJS.setAttribute("class", "container");
  containerJS.id = containerCount;

  for (var i = 0; i < words.length; i += 1) {
    const rowJS = document.createElement("div");
    rowJS.setAttribute("class", "row");
    for (var j = 0; j < words[i].length; j += 1) {
      const wordJS = document.createElement("span");
      wordJS.setAttribute("class", "word");
      wordJS.innerHTML = words[i][j];
      rowJS.appendChild(wordJS);
    }
    containerJS.appendChild(rowJS);
  }
  const btnInContainer = document.createElement("button");
  btnInContainer.innerText = "Click to add yellow boxes";
  btnInContainer.id = "btn" + toString(containerCount);
  containerJS.appendChild(btnInContainer);
  btnInContainer.addEventListener("click", () =>
    printYellowContainer(containerCount)
  );
  document.body.appendChild(containerJS);
  containerCount += 1;
}

function printYellowContainer(i) {
  const rowJS = document.createElement("div");
  rowJS.setAttribute("class", "row");
  const wordJS1 = document.createElement("span");
  wordJS1.setAttribute("class", "word");
  wordJS1.innerText = "hello";
  const wordJS2 = document.createElement("span");
  wordJS2.setAttribute("class", "word");
  wordJS2.innerText = "banana";
  rowJS.appendChild(wordJS1);
  rowJS.appendChild(wordJS2);
  document.body.getElementById(i).appendChild(rowJS);
}
