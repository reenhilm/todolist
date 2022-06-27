let btnAdd = document.querySelector('#btnAdd');
let InputItemName = document.querySelector('#InputItemName');
let listItems = document.querySelector('#listItems');
let btnRemove = document.querySelector('#btnRemove');

let addItemToList = function()
{
    let option = document.createElement("option");
    option.text = InputItemName.value;
    listItems.add(option);
}

btnAdd.addEventListener('click', e => {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation');
    let form = forms[0];
    e.preventDefault();
    e.stopPropagation();
    
    if(form.checkValidity())
        addItemToList();

    form.classList.add('was-validated');
});

listItems.addEventListener('mousedown', e => {
    e.preventDefault();
    listItems.selectedIndex = -1;
    e.target.selected = true;
    console.log(window.getComputedStyle(e.target).backgroundColor);
    if(window.getComputedStyle(e.target).backgroundColor === 'rgb(170, 170, 255)')
    {
        e.target.style.backgroundColor  = '#FFFFFF';
        e.target.style.textDecoration = '';
    }
    else
    {
        e.target.style.backgroundColor  = '#AAAAFF';
        e.target.style.textDecoration = 'line-through';
    }
});

InputItemName.addEventListener('focus', e => {
    e.target.select();
});

InputItemName.addEventListener('mouseup', e => {
    return false;
});

btnRemove.addEventListener('click', e => {
    e.preventDefault();
    if(listItems.selectedIndex !== -1)
        listItems.remove(listItems.selectedIndex);
});