function onCustomize(self) {
  const imgs = document.getElementsByClassName("check");
  for (let img of imgs) {
    img.src = "./assets/customize/uncheck.png";
  }

  const selectedImg = document.getElementById(self.id + "-img");
  selectedImg.src = "./assets/customize/check.png";

  document.getElementById("size-answer").innerHTML = self.id;
}

// Get the "Show summary" button
let ShowSummaryButton = document.getElementById("show-summary-btn");
// Add an event listener on "click"
ShowSummaryButton.addEventListener("click", () => {
  // Get the summary page
  let Summary = document.getElementById("summary-view");
  // Add the "Show" class
  Summary.classList.add("show");
  // Remove the "hide" class
  Summary.classList.remove("hide");
});

// Get the "Close" button on the Summary page
let SummaryCloseButton = document.getElementById("summary-close-btn");
// Add an event listener on "click"
SummaryCloseButton.addEventListener("click", () => {
  // Get the summary page
  let Summary = document.getElementById("summary-view");
  // Remove the "Show" class
  Summary.classList.remove("show");
  // Add the "hide" class
  Summary.classList.add("hide");
});

// Get the "Next" button
let NextButton = document.getElementById("next-btn");
// Add an event listener on "click"
NextButton.addEventListener("click", () => {
  // Retrieve both pages for the transition
  let StepOne = document.getElementById("step-one");
  let StepTwo = document.getElementById("step-two");
  // Hide the first page
  StepOne.classList.add("animate__backOutLeft");
  // Show the second page
  StepTwo.classList.add("animate__backInRight");
  // Change the display so it stops being 'display: none;'
  StepTwo.style.display = "initial";
});
