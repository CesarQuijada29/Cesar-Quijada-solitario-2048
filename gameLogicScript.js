/*Lógica de movimiento de cartas */
const cardRow = document.querySelectorAll('.cardRows');
const generador = document.querySelector('.CardAvailable');
const valoresPosibles = [2,2,2,2, 4,4,4, 8,8, 16,16, 32,32, 64, 128, 256, 512, 1024, 2048];
let contadorId = 0; // Para que cada objeto tenga un ID único

function crearNuevoObjeto() {
  const newCard = document.createElement('div');
  const newPosition = Math.floor(Math.random() * 15)
  
  // Configuración del objeto
  newCard.id = `cartaArrastrable-${contadorId++}`;
  newCard.className = 'MovableCard';
  newCard.setAttribute('draggable', 'true');
  newCard.innerText = `${valoresPosibles[newPosition]}`;
  /* colores de las cartas :p */
  if (newCard.innerText === '2' ){
    newCard.style.background = "var(--color-card-2)";
  }
  if (newCard.innerText === '4' ){
    newCard.style.background = "var(--color-card-4)";
  }
  if (newCard.innerText === '8' ){
    newCard.style.background = "var(--color-card-8)";
  }
  if (newCard.innerText === '16' ){
    newCard.style.background = "var(--color-card-16)";
  }
  if (newCard.innerText === '32' ){
    newCard.style.background = "var(--color-card-32)";
  }
  if (newCard.innerText === '64' ){
    newCard.style.background = "var(--color-card-64)";
  }
  if (newCard.innerText === '128' ){
    newCard.style.background = "var(--color-card-128)";
  }
  if (newCard.innerText === '256' ){
    newCard.style.background = "var(--color-card-256)";
  }
  if (newCard.innerText === '512' ){
    newCard.style.background = "var(--color-card-512)";
  }
  if (newCard.innerText === '1024' ){
    newCard.style.background = "var(--color-card-1024)";
  }
  if (newCard.innerText === '2048' ){
    newCard.style.background = "var(--color-card-2048)";
  }

  // Evento de arrastre
  newCard.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    
  });
  generador.appendChild(newCard);
}

// Esto crea el objeto de una vez para iniciar
crearNuevoObjeto();

cardRow.forEach(cardRow => {
  cardRow.addEventListener('dragover', (e) => {
    e.preventDefault(); 
  });

  cardRow.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const movedCard = document.getElementById(id);
    cardRow.appendChild(movedCard);
    crearNuevoObjeto();
    /* con esto se fija la carta en la columna */
    movedCard.setAttribute('draggable', 'false');
    movedCard.style.cursor = 'not-allowed';
  });
});