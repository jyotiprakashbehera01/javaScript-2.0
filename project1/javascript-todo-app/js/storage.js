const STORAGE_KEY = "smartTodoTasks";

// Get tasks from Local Storage

export function getTasks() {

    const tasks = localStorage.getItem(STORAGE_KEY);

    return tasks ? JSON.parse(tasks) : [];

}


// Save tasks in Local Storage

export function saveTasks(tasks) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );

}