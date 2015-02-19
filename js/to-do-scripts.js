$(document).ready(function () {
  var allTasks = [];
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var inputtedDescription = $("input#new-description").val();
    var newTask = { descript: inputtedDescription, done: "false"};
    allTasks.push(newTask);

    $("ul#completed").empty();
    $("ul#uncompleted").empty();

    allTasks.forEach(function(task) {
      if (task.done === "true") {
        $("ul#completed").append("<li>" + task.descript + "</li>");
      } else {
        $("ul#uncompleted").append("<span class='uncompleted'><li>" + task.descript + "</li></span>");
        $(".uncompleted").last().click(function() {
          task.done = "true";
          $("ul#completed").append($(this).children());
        });
      }
    });
    $("input#new-description").val("");
  });
});
