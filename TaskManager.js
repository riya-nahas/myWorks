class TaskManager {
    constructor() {
        this.tasks = [];
    }

    card(taskName, taskDescription, taskAssignedTo, dueDate, taskStatus, taskPriority) {
        const cardDetails = {
            taskNameObj: taskName,
            descriptionObj: taskDescription,
            assignedToObj: taskAssignedTo,
            duedateobj: dueDate,
            statusObj: taskStatus,
            priorityObj: taskPriority,
        };

        this.tasks.push(cardDetails);
        console.log(this.tasks);
    }


}
function createCard(array) {
    const oneCard = `
        <div class="single-cards">
            <h5 class="card-title">${array.taskNameObj}</h5></div>
            <p class="card-text">${array.descriptionObj}</p>
            <p class="card-text">Assigned to:${array.assignedToObj}</p>
            <h6 class="card-subtitle mb-2 text-muted">Due Date:${array.duedateobj}</h6>
            <p class="card-text">Priority: ${array.priorityObj}</p>
            <p class="card-text">${array.statusObj}</p>
        </div>
     `;
    return oneCard;
    // <div class="row">
    // <div class="col-sm-6">
    // <div class="card">
    // <div class="card-body">
    // <h5 class="card-title">${array.taskName}</h5>
    // <p class="card-text">${array.taskDescription}</p>
    // <p class="card-text">Assigned to:${array.taskAssignTo}</p>
    // <h6 class="card-subtitle mb-2 text-muted">Due Date:${array.dueDate}</h6>
    // <p class="card-text">Priority: ${array.taskPriority}</p>
    // <button typt="button submit" class="btn btn-danger removeMe" id="taskDeleteBtn">Delete</button>
    // </div>
    // </div>
    // </div>
    // </div>


}
