import { spisok } from "./index.js";
import { FillTheTodo } from "./index.js";
import { colour } from "./colour.js";


function add(spisok) {
    let name = document.querySelector('.todo__input').value;
    if (name) {
        let element = {
            name: name,
            colour: colour
        };
        spisok.push(element);
        localStorage.setItem('spisok', JSON.stringify(spisok));
    }
}

document.querySelector('.todo__button').addEventListener('click', () => {
    add(spisok);
    console.log(spisok);
    FillTheTodo();
    document.querySelector('.todo__input').value = '';
})