export let spisok;

if (localStorage.getItem('spisok')) {
    spisok = JSON.parse(localStorage.getItem('spisok'));
} else {
    spisok = [];
}


export function FillTheTodo() {
    document.querySelector('.todo__spisok').innerHTML = '';
    for (let i = 0; i < spisok.length; i++) {
        let newDiv = document.createElement('div');
        let text = document.createElement('div');
        text.innerText = spisok[i].name;
        text.style.color = spisok[i].colour;
        text.classList.add('todo__element__text')
        let del = document.createElement('div');
        del.innerText = 'X';
        del.classList.add('todo__element__del');
        del.addEventListener('click', () => {
            let elToDel = spisok[i];
            spisok = spisok.filter((el) => el !== elToDel);
            localStorage.setItem('spisok', JSON.stringify(spisok));
            FillTheTodo();
        })
        newDiv.appendChild(text);
        newDiv.appendChild(del);
        newDiv.classList.add('todo__element');
        document.querySelector('.todo__spisok').appendChild(newDiv);
    }
}

FillTheTodo();
