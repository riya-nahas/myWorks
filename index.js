const tasksManager = new TaskManager();
const tasksManagerArray = tasksManager.tasks;

//add task form
const taskName = document.querySelector("#EnterTaskName");
const taskDescription = document.querySelector("#exampleInputDescription");
const taskAssignedTo = document.querySelector("#exampleInputAssignedTo");
const dueDate = document.querySelector("#exampleInputduedate");
const taskStatus = document.querySelector("#selectStatus");
const taskPriority = document.querySelector("#selectPriority");
const submitBtn = document.getElementById('submitBtn');
const resetBTN = document.querySelector("#resetBtn");

//Error spans
const errorTaskName = document.querySelector("#taskNameError");
const errorTaskDescription = document.querySelector("#taskDescriptionError");
const errorAssignedTO = document.querySelector("#taskAssignError");
const errordueDate = document.querySelector("#dueDateError");

//
let todayDate = new Date().getTime();

function refreshTime() {
    const timeDisplay = document.getElementById("current-date");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}
setInterval(refreshTime, 1000);

//function for input task name error validation 

const validateForm = () => {
    let numberOfErrors = 0;
    if (!taskName.value) {
        // ErrorTaskName.classList.add("errorStyle");
        errorTaskName.innerHTML = "Please add a task name";
        numberOfErrors++;
    } else if (taskName.value.length < 8) {
        //ErrorTaskName.classList.add("errorStyle");
        errorTaskName.innerHTML = "Task name needs to be longer than 8 characters";
        numberOfErrors++;
    } else {
        // ErrorTaskName.classList.remove("errorStyle");
        errorTaskName.classList.add("successStyle");
        errorTaskName.innerHTML = "Good to go!!!";
    }

    //Description

    if (!taskDescription.value) {
        errorTaskDescription.innerText = "Please describe the task";
        numberOfErrors++;

    } else if (taskDescription.value.length < 15) {
        errorTaskDescription.innerText = "Task description should be more than 15 characters";
        numberOfErrors++;
    } else {
        errorTaskDescription.classList.add("successStyle");
        errorTaskDescription.innerText = "Good to go!!!";
    }
    // Assigned to
    if (!taskAssignedTo.value) {
        errorAssignedTO.innerText = "Please assign the value";
        numberOfErrors++;


    } else if (taskAssignedTo.value.length < 8) {
        errorAssignedTO.innerText = "value should be greater than 8 characters";
        numberOfErrors++;


    } else {
        errorAssignedTO.classList.add("successStyle");
        errorAssignedTO.innerText = "Good to go!!!";
    }
    //due date
    if (!dueDate.value) {
        errordueDate.innerText = "Please input date";
    }
    else if (new Date(`${dueDate.value}`).getTime() < todayDate) {
        //dueDate.classList.add("errorStyle");
        errordueDate.innerText = "You cannot pick a past date";
        numberOfErrors++;
    } else {
        // dueDate.classList.remove("errorStyle");
        errordueDate.classList.add("successStyle");
        errordueDate.innerText = "Good to go!!!";
    }
    //if everything works successfull
    if (numberOfErrors === 0) {
        tasksManager.card(
            taskName.value,
            taskDescription.value,
            taskAssignedTo.value,
            dueDate.value,
            taskStatus.value,
            taskPriority.value
        );
        let cardDiv = document.createElement("div");
        
        cardDiv.innerHTML = createCard(tasksManagerArray[tasksManagerArray.length - 1]);
        // cardDiv.innerHTML = '<div class="left-edge"> Test</div>'
        alert(taskStatus.value);
        
        // Sort cards into correct Status column
        if (taskStatus.value === "toDo") {
            document.querySelector("#toDoCard").appendChild(cardDiv);
        } else if (taskStatus.value === "inProgress") {
            document.querySelector("#inProgressCard").appendChild(cardDiv);
        } else if (taskStatus.value === "review") {
            document.querySelector("#reviewCard").appendChild(cardDiv);
        } else if ((taskStatus.value = "done")) {
            document.querySelector("#doneCard").appendChild(cardDiv);
        }

    }


}
submitBtn.addEventListener("click", validateForm);
