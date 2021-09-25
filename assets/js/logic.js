var currentDayEl = document.querySelector("#currentDay");
var todayDate = moment().format("MMMM Do YYYY");
currentDayEl.textContent = todayDate;

var setTime = function() {
  var setHourIndex = 9;
  for (var i = 0; i < 9; i++) {
    var textarea = document.querySelector(`#textarea${i}`);
    var hour = document.querySelector(`#hour${i}`);
    var setHour = moment().set("hour", setHourIndex);
    hour.textContent = setHour.format("hA");
    setHourIndex++;
    if (Math.floor(moment().diff(setHour, "hours")) === 0) {
      textarea.classList.add("present");
    }
    else if (Math.floor(moment().diff(setHour, "hours")) > 0) {
      textarea.classList.add("past");
    }
    else if (Math.floor(moment().diff(setHour, "hours")) < 0) {
      textarea.classList.add("future");
    }
  }
}

setTime();

