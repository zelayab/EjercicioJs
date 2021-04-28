
const boton2 = document.getElementById("btnAddBox");
const divContainer = document.getElementById("contenedor");
const texto = document.getElementById("texto")
const imagen = document.getElementById("imagen")

function reset(){
    imagen.value = '';
    texto.value = '';
}

boton2.addEventListener('click', function () {
    /* Creando el Div  */
    const addBox = document.createElement('div');
    addBox.classList.add('caja');
    /* creando el P */
    const addText = document.createElement('p');
    /* Accedo al valor del p */
    addText.textContent = document.getElementById('texto').value;
    /* creo elemento IMG */
    const addIg = document.createElement('img'); 
    /* creo clase nueva */
    addIg.classList.add('img-card');
    /* Accedo al valor de la Imagen*/
    addIg.setAttribute('src', imagen.value);
    /* mostrar card */
    addBox.appendChild(addIg);
    addBox.appendChild(addText);
    divContainer.appendChild(addBox);
    /* reseteo los valores del input */
    reset();
        
});



