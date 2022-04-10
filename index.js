function addTodo(){
    todolist.innerHTML += `
    <li>
        <input type="checkbox"> ${todofield.value}
    </li>
    `;
    todofield.value = ``;
}
function removeTodo(){
    todolist.innerHTML = ``;
}