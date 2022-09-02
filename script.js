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

// Set Date Input Minimum with Today's Date
// today is a string. e.g. "2022-09-02"
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);
