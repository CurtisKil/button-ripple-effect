const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Calculate y & x based off the top and left of the button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Create circle
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    // Remove circle from DOM after half a second
    setTimeout(() => circle.remove(), 500);
  });
});
