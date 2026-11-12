import { getTasks } from "./storage.js";

const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

const pendingTasks = document.getElementById("pendingTasks");


// Display Tasks

export function renderTasks(filter = "all") {

    const tasks = getTasks();

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (filter === "completed") {

        filteredTasks = tasks.filter(
            task => task.completed
        );

    }

    else if (filter === "pending") {

        filteredTasks = tasks.filter(
            task => !task.completed
        );

    }


    if (filteredTasks.length === 0) {

        taskList.innerHTML = `
            <p class="empty-message">
                No tasks found. Add a new task!
            </p>
        `;

    }


    filteredTasks.forEach(task => {

        const taskElement = document.createElement("div");

        taskElement.className = "task-item";

        taskElement.innerHTML = `

            <div class="task-left">

                <input
                    type="checkbox"
                    class="complete-checkbox"
                    data-id="${task.id}"
                    ${task.completed ? "checked" : ""}
                >

                <span class="task-title ${task.completed ? "completed" : ""}">
                    ${escapeHTML(task.title)}
                </span>

            </div>

            <div class="task-actions">

                <button
                    class="action-btn edit-btn"
                    data-id="${task.id}"
                    aria-label="Edit task"
                >
                    <i class="bi bi-pencil"></i>
                </button>

                <button
                    class="action-btn delete-btn"
                    data-id="${task.id}"
                    aria-label="Delete task"
                >
                    <i class="bi bi-trash"></i>
                </button>

            </div>

        `;

        taskList.appendChild(taskElement);

    });

    updateStats(tasks);

}


// Prevent HTML injection from task titles

function escapeHTML(value) {

    return value.replace(/[&<>"']/g, character => {

        const entities = {

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"

        };

        return entities[character];

    });

}


// Update Statistics

function updateStats(tasks) {

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = tasks.length - completed;

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

}