export let colour = 'white';

let choose = document.querySelector('.colour__choose');


document.querySelector('.white').addEventListener('click', () => {
    colour = 'white';
    choose.innerHTML = 'белый';
})
document.querySelector('.red').addEventListener('click', () => {
    colour = 'rgb(255, 56, 56)';
    choose.innerHTML = 'красный';
})
document.querySelector('.orange').addEventListener('click', () => {
    colour = 'rgb(255, 94, 0)';
    choose.innerHTML = 'оранжевый';
})
document.querySelector('.yellow').addEventListener('click', () => {
    colour = 'rgb(255, 252, 50)';
    choose.innerHTML = 'жёлтый';
})
document.querySelector('.blue').addEventListener('click', () => {
    colour = 'rgb(0, 217, 255)';
    choose.innerHTML = 'синий';
})
document.querySelector('.violet').addEventListener('click', () => {
    colour = 'rgb(255, 43, 244)';
    choose.innerHTML = 'фиолетовый';
})
document.querySelector('.green').addEventListener('click', () => {
    colour = 'rgb(0, 255, 13)';
    choose.innerHTML = 'зелёный';
})