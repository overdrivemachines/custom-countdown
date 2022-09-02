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

const countdownEl = $("#countdown");
const countdownElTitle = $("#countdown-title");
const countdownBtn = $("#countdown-button");
const timeElements = $(".span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Minimum with Today's Date
// today is a string. e.g. "2022-09-02"
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Population Countdown / Complete UI
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log("distance", distance);

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  console.log(days, hours, minutes, seconds);

  // Populating Countdown
  countdownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  // Hide Input
  inputContainer.hidden = true;

  // Show Countdown
  countdownEl.hidden = false;
}

// Take Values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log("title:", countdownTitle, "date:", countdownDate);

  // Get number version of current Date, update DOM
  // The getTime() method returns the number of milliseconds since the ECMAScript epoch.
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdownValue", countdownValue);
  updateDOM();
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
