import { getTasks, saveTasks } from "./storage.js";

// Generate unique task ID

function generateId() {

    return crypto.randomUUID();

}


// Add New Task

export function addTask(title) {

    const tasks = getTasks();

    const newTask = {

        id: generateId(),

        title: title,

        completed: false,

        createdAt: new Date().toISOString()

    };

    tasks.push(newTask);

    saveTasks(tasks);

}


// Delete Task

export function deleteTask(id) {

    const tasks = getTasks();

    const updatedTasks = tasks.filter(
        task => task.id !== id
    );

    saveTasks(updatedTasks);

}


// Edit Task

export function editTask(id, newTitle) {

    const tasks = getTasks();

    const updatedTasks = tasks.map(task => {

        if (task.id === id) {

            return {
                ...task,
                title: newTitle
            };

        }

        return task;

    });

    saveTasks(updatedTasks);

}


// Complete Task

export function completeTask(id) {

    const tasks = getTasks();

    const updatedTasks = tasks.map(task => {

        if (task.id === id) {

            return {
                ...task,
                completed: !task.completed
            };

        }

        return task;

    });

    saveTasks(updatedTasks);

}