// Write your code here
const bulbs = document.querySelectorAll(".lightbulb");
const clicked = document.querySelector(".subtitle");

let clickedCount = 0;

bulbs.forEach((bulb) => {
  bulb.addEventListener("click", () => {
    bulb.classList.toggle("active");
    clickedCount++;
    clicked.innerHTML = `You've clicked the lights ${clickedCount} times`;
  });
});
