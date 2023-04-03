/** @format */

let questionSet = [
  { question: "What actor plays the flash in The Flash?", answer: "Grant Gustin" },
  { question: "What actor plays Iris West in The Flash?", answer: "Candice Patton" },
  {
    question: "What actor plays detective Joe West in The Flash?",
    answer: "Jesse L. Martin",
  },
];

let eowenActress = [
  "Incorrect! This is the villian Captain Cold!",
    "Incorrect! This is the hero, Oliver Queen, also known as Green Arrow!",
    "Correct! This is the Reverse Flash, also known as Harrison Wells!",
];

let questionNumber = 0;
//  for buttons in part 1
const addListener = (item) => {
  item.addEventListener("click", (e) => {
    questionNumber = e.target.attributes.num.value - 1;
    document.querySelector("#answer").textContent = "";
    document.querySelector("#question").textContent =
      questionSet[questionNumber].question;
  });
};
let questionButtons = document.querySelectorAll(".qBtn");
questionButtons.forEach(addListener);

document.querySelector("#check").addEventListener("click", (e) => {
  document.querySelector("#answer").textContent =
    questionSet[questionNumber].answer;
});

// ... for characters in shire, the buttons as check boxes
document.querySelector("#shire_characters").addEventListener("click", (e) => {
  console.log("check buttons");
  let check_buttons = document.querySelectorAll(".shire");
  let correct_buttons = document.querySelectorAll("[correct]");
  let checked_buttons = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  if (checked_buttons.length > 3) {
    document.querySelector("#correct_shire_characters").textContent =
      "Hey, you can only pick 3!";
    return false;
  }

  console.log("checked buttons", checked_buttons);
  let score = 0;
  for (let i = 0; i < correct_buttons.length; i++) {
    for (let j = 0; j < checked_buttons.length; j++)
      if (correct_buttons[i] === checked_buttons[j]) score += 1;
  }
  document.querySelector(
    "#correct_shire_characters"
  ).textContent = `You scored ${score}/3. The characters who are part of Team Flash are Flash, Killer Frost, and Cisco!`;
});

// ... which actor button group
document.querySelectorAll(".which_actor").forEach((e) => {
  addEventListener("click", (e) => {
    let eowenNumber = e.target.attributes.choice.value;
    document.querySelector("#eowen").textContent = eowenActress[eowenNumber];
  });
});

document.querySelector("#which_wizard").addEventListener("click", (e) => {
  let selectedWizard = document.querySelector("input[type=radio]:checked");
  if (selectedWizard.id === "gandalf")
    document.querySelector("#correct_wizard").textContent =
      "Correct! The Reverse Flash trained The Flash and revealed himself to be evil later on!";
  else {
    let wizName =
      selectedWizard.id[0].toUpperCase() + selectedWizard.id.substring(1);
    document.querySelector(
      "#correct_wizard"
    ).textContent = `No, ${wizName} always appeared as evil, The Reverse Flash appeared friendly at first.`;
  }
});
