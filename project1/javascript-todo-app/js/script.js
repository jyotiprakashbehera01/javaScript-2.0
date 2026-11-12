import {
    addTask,
    deleteTask,
    editTask,
    completeTask
} from "./task.js";

import { renderTasks } from "./ui.js";

import { getTasks } from "./storage.js";


// HTML Elements

const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const submitBtn = document.getElementById("submitBtn");

const errorMessage = document.getElementById("errorMessage");

const taskList = document.getElementById("taskList");

const filterButtons = document.querySelectorAll(".filter-btn");


// Application State

let currentFilter = "all";

let editingTaskId = null;


// Initial Rendering

renderTasks();


// Add and Update Task

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = taskInput.value.trim();

    if (title === "") {

        errorMessage.textContent = "Please enter a task.";

        return;

    }

    if (editingTaskId) {

        editTask(editingTaskId, title);

        editingTaskId = null;

        submitBtn.innerHTML = '<i class="bi bi-plus-lg"></i> Add Task';

    }

    else {

        addTask(title);

    }

    taskInput.value = "";

    errorMessage.textContent = "";

    renderTasks(currentFilter);

});


// Task List Events

taskList.addEventListener("click", function (event) {

    const button = event.target.closest("button");

    if (!button) return;

    const id = button.dataset.id;

    // Edit Task

    if (button.classList.contains("edit-btn")) {

        const tasks = getTasks();

        const selectedTask = tasks.find(
            task => task.id === id
        );

        if (selectedTask) {

            taskInput.value = selectedTask.title;

            editingTaskId = id;

            submitBtn.textContent = "Update Task";

            taskInput.focus();

        }

    }


    // Delete Task

    if (button.classList.contains("delete-btn")) {

        const confirmDelete = confirm(
            "Are you sure you want to delete this task?"
        );

        if (confirmDelete) {

            deleteTask(id);

            if (editingTaskId === id) {

                editingTaskId = null;

                taskInput.value = "";

                submitBtn.textContent = "Add Task";

            }

            renderTasks(currentFilter);

        }

    }

});


// Complete Task

taskList.addEventListener("change", function (event) {

    if (event.target.classList.contains("complete-checkbox")) {

        const id = event.target.dataset.id;

        completeTask(id);

        renderTasks(currentFilter);

    }

});


// Task Filters

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        this.classList.add("active");

        currentFilter = this.dataset.filter;

        renderTasks(currentFilter);

    });

});


// Clear editing state if user cancels editing

taskInput.addEventListener("input", function () {

    errorMessage.textContent = "";

});