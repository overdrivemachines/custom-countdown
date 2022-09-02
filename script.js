// Helper function to get elements
function $(id) {
  if (id.charAt(0) === "#") {
    return document.getElementById(id.substring(1));
  } else if (id.charAt(0) === ".") {
    return document.querySelectorAll(id.substring(1));
  }
}

const inputContainer = $("#input-container");
const countdownForm = $("#countdownForm");
const dateEl = $("#date-picker");

let countdownTitle = "";
let countdownDate = "";

// Set Date Input Minimum with Today's Date
// today is a string. e.g. "2022-09-02"
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Take Values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log("title:", countdownTitle, "date:", countdownDate);
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
