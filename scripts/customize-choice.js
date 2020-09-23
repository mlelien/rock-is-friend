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
let ShowSummaryButtonStepTwo = document.getElementById(
  "show-summary-btn-step-two"
);
// Add an event listener on "click"
ShowSummaryButton.addEventListener("click", () => {
  // Get the summary page
  let Summary = document.getElementById("summary-view");
  // Add the "Show" class
  Summary.classList.add("show");
  // Remove the "hide" class
  Summary.classList.remove("hide");
});
ShowSummaryButtonStepTwo.addEventListener("click", () => {
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
  StepTwo.classList.remove("animate__backOutRight");
  StepTwo.classList.add("animate__backInRight");
  // Change the display so it stops being 'display: none;'
  StepTwo.style.display = "flex";
});

// Get the "Back" button
let StepTwoBackButton = document.getElementById("back-btn-step-two");
// Add an event listener on "click"
StepTwoBackButton.addEventListener("click", () => {
  // Retrieve both pages for the transition
  let StepOne = document.getElementById("step-one");
  let StepTwo = document.getElementById("step-two");
  // Hide the second page
  StepTwo.classList.add("animate__backOutRight");
  // Show the first page
  StepOne.classList.remove("animate__backOutLeft");
  StepOne.classList.add("animate__backInLeft");
  setTimeout(() => {
    StepTwo.style.display = "none";
  }, 500);
});

// Get the "Back" button
let StepThreeNextButton = document.getElementById("next-btn-cart");
// Add an event listener on "click"
StepThreeNextButton.addEventListener("click", () => {
  // Retrieve both pages for the transition
  let StepTwo = document.getElementById("step-two");
  let StepThree = document.getElementById("step-three");
  let MainTitle = document.getElementById("main-title");
  // Hide the second page
  StepTwo.classList.add("animate__backOutLeft");
  // Show the third page
  StepThree.classList.remove("animate__backOutRight");
  StepThree.classList.add("animate__backInRight");
  // Change the display so it stops being 'display: none;'
  StepThree.style.display = "flex";
  MainTitle.innerHTML = "View cart";
});

let SecondStepShowPitcure = document.getElementById(
  "second-step-choose-picture"
);
let SecondStepShowText = document.getElementById("second-step-choose-text");
SecondStepShowPitcure.addEventListener("click", () => {
  toggleSecondScreenChoise("picture");
});
SecondStepShowText.addEventListener("click", () => {
  toggleSecondScreenChoise("text");
});
function toggleSecondScreenChoise(choice) {
  let ChoosePictureContainer = document.getElementById(
    "choose-picture-container"
  );
  let ChooseTextContainer = document.getElementById("choose-text-container");

  if (choice == "text") {
    SecondStepShowPitcure.style.opacity = "0.5";
    SecondStepShowText.style.opacity = "1";
    ChoosePictureContainer.classList.remove("animate__fadeIn");
    ChoosePictureContainer.classList.add("animate__fadeOut");
    setTimeout(() => {
      ChoosePictureContainer.classList.add("hidden");
      ChooseTextContainer.classList.remove("animate__fadeOut");
      ChooseTextContainer.classList.add("animate__fadeIn");
      ChooseTextContainer.classList.remove("hidden");
    }, 500);
  } else {
    SecondStepShowText.style.opacity = "0.5";
    SecondStepShowPitcure.style.opacity = "1";
    ChooseTextContainer.classList.remove("animate__fadeIn");
    ChooseTextContainer.classList.add("animate__fadeOut");
    setTimeout(() => {
      ChooseTextContainer.classList.add("hidden");
      ChoosePictureContainer.classList.remove("animate__fadeOut");
      ChoosePictureContainer.classList.add("animate__fadeIn");
      ChoosePictureContainer.classList.remove("hidden");
    }, 500);
  }
}
