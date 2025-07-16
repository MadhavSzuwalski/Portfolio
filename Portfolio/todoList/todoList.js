// Preventing page reload
document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let task = document.getElementById("todoInput").value;
    addTask(task);
  });

// Settings variables
let tasks = [];
let JSONstring;
let editingTask = null;

load();
// When tasks are stored we display them
function load() {
  if (localStorage.getItem("storageTasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("storageTasks"));
    displayTasks("load");
  }
}

//📌 If the task input is empty we add a class for CSS .If editing a task we assign input to the chosen index, set our tasks to localStorage, go to the default, and display tasks. If adding a task we push a new element, set our tasks to localStorage, and display tasks.
function addTask(e) {
  if (e === "") {
    document.getElementById("todoLabel").classList.add("todoLabel");
    setTimeout(() => {
      document.getElementById("todoLabel").classList.remove("todoLabel");
    }, 200);
  } else if (editingTask) {
    tasks[editingTask].e = document.getElementById("todoInput").value;
    JSONstring = JSON.stringify(tasks);
    localStorage.setItem("storageTasks", JSONstring);
    document.getElementById("submitBtn").innerText = "Add a task";
    displayTasks();
  } else {
    tasks.push({ e, state: false });
    JSONstring = JSON.stringify(tasks);
    localStorage.setItem("storageTasks", JSONstring);
    displayTasks();
  }
}

// Removing chosen task, setting localStorage, and displaying tasks
function removeTask(e) {
  tasks.splice(e, 1);
  JSONstring = JSON.stringify(tasks);
  localStorage.setItem("storageTasks", JSONstring);
  displayTasks();
}

//📌 The sole reason for the parameter is to prevent console log error when loading page - nothing more than that. Clearing input box and displaying uncompleted and completed tasks.
function displayTasks(a) {
  document.getElementById("tasks").innerHTML = "";
  tasks.forEach((element, index) => {
    const li = document.createElement("li");
    if (!element.state) {
      li.innerHTML =
        "<input type='checkbox' onclick='taskComplete(" +
        index +
        ")'><div>" +
        element.e +
        "</div><button onclick=editTask(" +
        index +
        ") class='editBtn'></button><button onclick=removeTask(" +
        index +
        ") class='removeBtn'></button>";
      document.getElementById("tasks").appendChild(li);
    } else {
      li.innerHTML =
        "<input type='checkbox' checked onclick='taskComplete(" +
        index +
        ")'><div STYLE='text-decoration: line-through; text-decoration-thickness: 3px'>" +
        element.e +
        "</div><button onclick=editTask(" +
        index +
        ") class='editBtn'></button><button onclick=removeTask(" +
        index +
        ") class='removeBtn'></button>";
      document.getElementById("tasks").appendChild(li);
    }
  });
  editingTask = null;
  todoInput.value = "";
  if (a != "load") {
    applyLanguage();
  }
}

// Changing state of tasks, saving them to localStorage, and displaying them
function taskComplete(e) {
  tasks[e].state = !tasks[e].state;
  JSONstring = JSON.stringify(tasks);
  localStorage.setItem("storageTasks", JSONstring);
  displayTasks();
}

// Updating submit button text based on the selected language when editing, and filling input with the task being edited
function editTask(e) {
  if (settings.language == "en") {
    document.getElementById("submitBtn").innerText = "Submit";
  } else if (settings.language == "pl") {
    document.getElementById("submitBtn").innerText = "Zatwierdź";
  }
  todoInput.value = tasks[e].e;
  document.getElementById("todoInput").focus();
  editingTask = JSON.stringify(e);
}
