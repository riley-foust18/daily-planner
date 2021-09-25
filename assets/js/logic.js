var currentDayEl = document.querySelector("#currentDay");
var todayDate = moment().format("MMMM Do YYYY");

currentDayEl.textContent = todayDate;

