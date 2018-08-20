/*//Создаем у всех li кнопки close (крестик)
const myNodecontainer = document.getElementsByTagName('li');
for (let i = 0; i < myNodecontainer.length; i++) {
    createCloseButton(myNodecontainer[i]);
}*/

//Добавляем выделение при клике на li
/*const container = document.querySelector('ul');
container.addEventcontainerener('click', function(ev) {
    ev.target.classcontainer.toggle('checked');
}, false);

//Создание нового элемента из данных в myInput
const addbtn = document.querySelector('.addBtn');
addbtn.onclick =  function newElement() {
    var inputValue = document.getElementById('myInput').value;
    if (inputValue === '') {
        alert("The field dont't be empty!");
    } else {
        //Создаем новый элемент li
        var li = document.createElement('li');
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById('myUL').appendChild(li);

        //Делаем кнопку для удаления (крестик)
        createCloseButton(li);

        //Чистим поле input
        document.getElementById('myInput').value = '';
    }
}
function createCloseButton(node) {
    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(txt);
    node.appendChild(span);
    span.onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
}*/

function createCloseButton(li) {
    const button = document.createElement('button');
    
    button.classList.add('close');
    button.textContent = '\u00D7';
    li.appendChild(button);
    button.addEventListener('click', () => {
        const ulContainer = button.parentElement.parentElement;
        ulContainer.removeChild(li);
    })
}

function addNewElement(input, container) {
    const inputValue = input.value;

    if (inputValue === '') {
        return alert("The field dont't be empty!");
    }

    //Создаем новый элемент li
    const li = document.createElement('li');

    li.textContent = inputValue;
    container.appendChild(li);

    //Делаем кнопку для удаления (крестик)
    createCloseButton(li);

    //Чистим поле input
    input.value = '';
}

function init() {
    const container = document.querySelector('.todo-container');
    const addbtn = document.querySelector('.addBtn');
    const input = document.querySelector('.myInput');

    //Добавляем выделение при клике на li
    container.addEventListener('click', function(e) {
        e.target.classList.toggle('checked')
    });
    //тоже самое
    // container.addEventListener('click', e => e.target.classList.toggle('checked'));

    addbtn.addEventListener('click', () => addNewElement(input, container));
    Array.prototype.map.call(container.children, createCloseButton);
}

window.addEventListener('load', init);