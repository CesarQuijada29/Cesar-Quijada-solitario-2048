const darkMode= document.getElementById('darkSkin');
const Puntaje= document.getElementById('puntaje');
const activateMode=false 
let puntos=0
darkMode.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
});

/*Lógica de movimiento y generacion de cartas */
const cardRow = document.querySelectorAll('.cardRows');
const generador = document.querySelector('.CardAvailable');
const valoresPosibles = ["2", "4", "8", "16", "32", "64", "128", "256", "512", "1024", "2048"];
let contadorId = 0; // Para que cada objeto tenga un ID único

function crearNuevoObjeto() {
  const newCard = document.createElement('div');
  const newPosition = Math.floor(Math.random() * 5);
  const newPositionHard = Math.floor(Math.random() * 4) + 2;
  
  // Configuración del objeto
  newCard.id = `cartaArrastrable-${contadorId++}`;
  newCard.className = 'MovableCard';
  newCard.setAttribute('draggable', 'true');
  if(puntos > 1200){
    newCard.innerText = `${valoresPosibles[newPositionHard]}`;
  }
  else{
    newCard.innerText = `${valoresPosibles[newPosition]}`;
  }
  
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

/* combinacion y puntaje :p*/
function analisisColumnas() {
  cardRow.forEach(cardRow => {
    const cards = Array.from(cardRow.children);
    if(cards.length > 1){
        for (let i = cards.length - 1; i > 0; i--) {
            const cartaActual = cards[i];
            const cartaSiguiente = cards[i - 1];
            if (cartaActual.textContent == cartaSiguiente.textContent) {
                puntos=puntos+Number(cartaActual.textContent);
                Puntaje.innerText = `Puntaje: ${puntos} pts.`;
                puntaje.style.fontSize = "1.5em";
                const newCard = document.createElement('div');
                // Configuración del objeto
                newCard.id = `cartaArrastrable-${contadorId++}`;
                newCard.className = 'MovableCard';
                newCard.setAttribute('draggable', 'false');
                for (let j = 0; j < valoresPosibles.length - 1; j++) {
                    if(cartaActual.innerText == valoresPosibles[j]){
                        newCard.innerText = `${valoresPosibles[j+1]}`;
                        break;
                    }
                    else{
                        newCard.innerText = `FUCK`;
                    }
                }
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
                cardRow.appendChild(newCard);
                cartaActual.remove();
                cartaSiguiente.remove(); 
                analisisColumnas();
            }
        }
    }
    });
}


// Esto crea el objeto de una vez para iniciar
crearNuevoObjeto();


cardRow.forEach(cardRow => {
  cardRow.addEventListener('dragover', (e) => {
    e.preventDefault(); 
  });

  cardRow.addEventListener('drop', (e) => {
    e.preventDefault();
    const MaxCards = cardRow.children.length;
    const id = e.dataTransfer.getData('text/plain');
    const movedCard = document.getElementById(id);

    if(MaxCards<5){
        cardRow.appendChild(movedCard);
        crearNuevoObjeto();
        analisisColumnas();
        /* con esto se fija la carta en la columna */
        movedCard.setAttribute('draggable', 'false');
        movedCard.style.cursor = 'not-allowed';
        /* Combinacion de cartas */
    }
  });
});
