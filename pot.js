/* TASK A: DARK MODE */
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/* TASK B: EDIT JOB TITLE */
const editBtn = document.getElementById("editTitleBtn");
const jobTitle = document.querySelector(".job-title");

editBtn.addEventListener("click", () => {
  const newTitle = prompt("Enter new job title:");
  if (newTitle) {
    jobTitle.textContent = newTitle;
  }
});

/* TASK C: SHOW / HIDE SKILLS */
const skills = document.querySelector(".skills-section");
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");

toggleSkillsBtn.addEventListener("click", () => {
  if (skills.style.display === "none") {
    skills.style.display = "block";
    toggleSkillsBtn.textContent = "Hide Skills";
  } else {
    skills.style.display = "none";
    toggleSkillsBtn.textContent = "Show Skills";
  }
});

/* TASK D: CHARACTER COUNTER */
const textarea = document.getElementById("messageBox");
const counter = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  counter.textContent = 100 - textarea.value.length;
});

/* TASK E: FORM VALIDATION */
function validateForm() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return false;
  }
  return true;
}

/* TASK F: DISPLAY TODAY'S DATE */
const dateElement = document.getElementById("todayDate");
const today = new Date();
dateElement.textContent = "Today is: " + today.toDateString();

/* TASK G: EXTRA FEATURE - RANDOM QUOTE */
const quotes = [
  "Keep pushing forward.",
  "Practice makes progress.",
  "You are doing great!",
  "Never stop learning.",
  "Believe in yourself."
];

function newQuote() {
  document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];
}
