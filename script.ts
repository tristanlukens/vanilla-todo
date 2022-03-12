const todoList: HTMLUListElement = document.getElementById("todo-list");
const input: HTMLInputElement = document.getElementById("input");
const btn: HTMLButtonElement = document.getElementById("button");

let currentValue: string;
input.addEventListener("change", (): void => {
  currentValue = input.value;
  console.log(currentValue);
});

const todos: Array<string> = ["boo", "yes"];

const createTodo = (text: string): HTMLLIElement => {
  let el = document.createElement("li");
  el.innerText = text;
  return el;
};

// impure function!
const appendTodo = (parent: HTMLUListElement, todo: HTMLLIElement): void => {
  parent.appendChild(todo);
};

btn.addEventListener("click", () => {
  let newTodo = createTodo(currentValue);
  appendTodo(todoList, newTodo);
  input.value = "";
});
