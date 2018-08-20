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

    const li = document.createElement('li');

    li.textContent = inputValue;
    container.appendChild(li);
    createCloseButton(li);
    input.value = '';
}

function init() {
    const container = document.querySelector('.todo-container');
    const addbtn = document.querySelector('.addBtn');
    const input = document.querySelector('.myInput');

    addbtn.addEventListener('click', () => addNewElement(input, container));
    Array.prototype.map.call(container.children, createCloseButton);
}

window.addEventListener('load', init);