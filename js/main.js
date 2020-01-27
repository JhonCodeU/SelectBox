const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenido_select = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) =>{
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenido_select.innerHTML =  e.currentTarget.innerHTML;
        console.log(e.currentTarget.innerHTML);
        select.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText/*valor input*/
    })
});
select.addEventListener('click', () => {
    select.classList.toggle('active')
    opciones.classList.toggle('active')
});