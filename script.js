const todoList = document.getElementById("todo-list");
const input = document.getElementById("input");
const btn = document.getElementById("button");
let currentValue;
input.addEventListener("change", () => {
    currentValue = input.value;
    console.log(currentValue);
});
const todos = ["boo", "yes"];
const createTodo = (text) => {
    let el = document.createElement("li");
    el.innerText = text;
    return el;
};
// impure function!
const appendTodo = (parent, todo) => {
    parent.appendChild(todo);
};
btn.addEventListener("click", () => {
    let newTodo = createTodo(currentValue);
    appendTodo(todoList, newTodo);
    input.value = "";
});
