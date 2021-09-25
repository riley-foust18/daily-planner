var currentDayEl = document.querySelector("#currentDay");
var todayDate = moment().format("MMMM Do YYYY");
currentDayEl.textContent = todayDate;

var items = [];
var setHourIndex = 9;

$(".hour").each(function() {
    var hourText = $(this).text();
    if (setHourIndex > 12) {
      setHourIndex = 1;
    }
    if (hourText.includes(setHourIndex)) {
      var check = $(this).parent().children()[1]
      check.id = ("id", hourText); 
      console.log(check)
      setHourIndex++;
    }
})
// var setTime = function() {
  
//   var hourText = rowHour.textContent;
  // for (var i = 0; i < 9; i++) {
  //   if (hourText.includes(setHourIndex)) {
  //     console.log("Hey these match");
  //     var textareaEl = document.querySelector("textarea")
  //     textareaEl.setAttribute("id", hourText)
  //     setHourIndex++;
  //   }}
//     // if (Math.floor(moment().diff(setHour, "hours")) === 0) {
//     //   textareaEl.classList.add("present");
//     // }
//     // else if (Math.floor(moment().diff(setHour, "hours")) > 0) {
//     //   textareaEl.classList.add("past");
//     // }
//     // else if (Math.floor(moment().diff(setHour, "hours")) < 0) {
//     //   textareaEl.classList.add("future");
//     // }
//   }
// }

// var loadTasks = function() {
//   tasks = JSON.parse(localStorage.getItem("tasks"));

//   // if nothing in localStorage, create a new object to track all task status arrays
//   if (!tasks) {
//     tasks = {
//       toDo: [],
//       inProgress: [],
//       inReview: [],
//       done: []
//     };
//   }

//   // loop over object properties
//   $.each(tasks, function(list, arr) {
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTask(task.text, task.date, list);
//     });
//   });
// };

var loadItems = function() {
  items = JSON.parse(localStorage.getItem("items"));
  if (!items) {
    items = {
      nineAM: [],
      tenAM: [],
      elevenAM: [],
      twelevePM: [],
      onePM: [],
      twoPM: [],
      threePM: [],
      fourPM: [],
      fivePM: [],
    }
    localStorage.setItem("items", JSON.stringify(items));
  }

}

var changeItems = function(textInput, textId) {
  console.log(textInput);
  console.log(textId);
}


$(".row").on("click", ".saveBtn", function(event) {
  var textSelect = $(this).parent().children()[1];
  var textInput = textSelect.value.trim();
  var textId = textSelect.id;
  changeItems(textInput, textId);
})

// setTime();
loadItems();
