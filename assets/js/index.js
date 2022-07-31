/* DEFININIENDO DOMS Y LISTA DE TAREAS QUE VENDRIA POR DEFECTO*/
const tasks = [{id: 1, name: "Ir al supermercado", completed: false},
            {id:2, name: "Pasear al perro", completed: false},
            {id:3, name: "Ir al gimnasio", completed: false}]
const taskList = document.querySelector("#task-list")
const btnAdd = document.querySelector("#btn-add")
const taskInput = document.querySelector("#task-input")
const totalTasks = document.querySelector("#total-tasks")
const doneTasks = document.querySelector("#done-tasks")
function renderTasks () {
    let html = ""
    for (const task of tasks) {
        html += `<tr>
                            <td>${task.id}</td>
                            <td>${task.name}</td>
                            <td><input type="checkbox" id="${task.id}" name="ready" class="ready"></td>
                            <td><button class="btn-delete" id="${task.id}">X</button></td>
                        </tr>`;
    };
    taskList.innerHTML = html;
};
renderTasks();
btnAdd.addEventListener("click", () => {
    if(taskInput.value == ''){
        alert("Ingrese una tarea, por favor.")
    } else if (tasks.length != 0) {
        /* Para hacer un id autoincrementable */
        const lastIdTask = tasks[tasks.length-1].id
        const newTask = {id: lastIdTask+1, name: taskInput.value, completed: false}
        tasks.push(newTask)
        taskInput.value = ""
        renderTasks();
        addDeleteFunction();
    } else {
        /* Si no hay datos, comienza con id: 1 */
        const newTask = {id: 1, name: taskInput.value, completed: false}
        tasks.push(newTask)
        taskInput.value = ""
        renderTasks();
        addDeleteFunction();}
});
function deleteTask (id){
    const indexTsk = tasks.findIndex((element) => element.id == id)
    tasks.splice(indexTsk,1)
    renderTasks();
    addDeleteFunction();
}
function addDeleteFunction() {
    buttonsDel = document.querySelectorAll(".btn-delete")
    buttonsDel.forEach(button => button.addEventListener("click", () => {
        deleteTask(button.id);
    })
    )};
addDeleteFunction();