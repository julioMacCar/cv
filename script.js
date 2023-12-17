const sobreMi = document.querySelector('.sobre .h1-nombre');
const informacionAdicional = document.querySelector('.sobre p');

sobreMi.addEventListener('click', () => {
  informacionAdicional.classList.toggle('mostrar');
});