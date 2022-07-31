/* DEFININIENDO DOMS Y LISTA DE TAREAS QUE VENDRIA POR DEFECTO*/
const tasks = [
  { id: 1, name: "Ir al supermercado", completed: false },
  { id: 2, name: "Pasear al perro", completed: false },
  { id: 3, name: "Ir al gimnasio", completed: false },
];
const taskList = document.querySelector("#task-list");
const btnAdd = document.querySelector("#btn-add");
const taskInput = document.querySelector("#task-input");
const totalTasks = document.querySelector("#total-tasks");
const doneTasks = document.querySelector("#done-tasks");
/* DEFINIENDO FUNCIONES DE RENDER Y ELIMINAR TAREAS*/
function renderTasks() {
  let html = "";
  for (const task of tasks) {
    if (task.completed == false) {
      html += `<tr>
                            <td>${task.id}</td>
                            <td>${task.name}</td>
                            <td><input type="checkbox" id="${task.id}" name="ready" class="ready"></td>
                            <td><button class="btn-delete" id="${task.id}">X</button></td>
                        </tr>`;
    } else {
      html += `<tr>
                            <td>${task.id}</td>
                            <td>${task.name}</td>
                            <td><input type="checkbox" id="${task.id}" name="ready" class="ready" checked="true"></td>
                            <td><button class="btn-delete" id="${task.id}">X</button></td>
                        </tr>`;
    }
  }
  taskList.innerHTML = html;
  totalTasks.innerHTML = `${tasks.length}`;
  doneTasks.innerHTML = `${
    tasks.filter((task) => task.completed == true).length
  }`;
}

function deleteTask(id) {
  const indexTsk = tasks.findIndex((element) => element.id == id);
  tasks.splice(indexTsk, 1);
  renderTasks();
  addDeleteFunction();
  addChangeFunction();
}
/* Cargamos la primera lista de tareas y el contador */
renderTasks();
/* DEFINIENDO EVENTO DEL BOTON "AGREGAR" */
btnAdd.addEventListener("click", () => {
  if (taskInput.value == "") {
    alert("Ingrese una tarea, por favor.");
  } else if (tasks.length != 0) {
    /* Para hacer un id autoincrementable */
    const lastIdTask = tasks[tasks.length - 1].id;
    const newTask = {
      id: lastIdTask + 1,
      name: taskInput.value,
      completed: false,
    };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
    addDeleteFunction();
    addChangeFunction();
  } else {
    /* Si no hay datos, comienza con id: 1 */
    const newTask = { id: 1, name: taskInput.value, completed: false };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
    addDeleteFunction();
    addChangeFunction();
  }
});
/* ESTA FUNCION AGREGA LA FUNCION PARA BORRAR EN CADA BOTON "X" */
function addDeleteFunction() {
  buttonsDel = document.querySelectorAll(".btn-delete");
  buttonsDel.forEach((button) =>
    button.addEventListener("click", () => {
      deleteTask(button.id);
    })
  );
}
addDeleteFunction();
/* ESTA FUNCION AGREGA LA FUNCION CHANGESTATUS A CADA CHECKBOX */
function addChangeFunction() {
  checkboxList = document.querySelectorAll(".ready");
  checkboxList.forEach((checkbox) =>
    checkbox.addEventListener("click", () => {
      changeCheckStatus(checkbox, checkbox.id);
    })
  );
}
addChangeFunction();
/* ESTA FUNCION HACE QUE EL ESTADO DE CADA TAREA CAMBIE DE COMPLETADO A NO COMPLETADO */
function changeCheckStatus(checkbox, id) {
  idIndex = tasks.findIndex((e) => e.id == id);
  if (checkbox.checked == true) {
    tasks[idIndex].completed = true;
    renderTasks();
    addDeleteFunction();
    addChangeFunction();
  } else {
    tasks[idIndex].completed = false;
    renderTasks();
    addDeleteFunction();
    addChangeFunction();
  }
}
