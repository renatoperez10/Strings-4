let palabras = ['café', 'croissant', 'tostada', 'zumo'];
let palabrasParesModificadas = modificaPares(palabras, elemento => elemento.charAt(0).toUpperCase() + elemento.slice(1));
console.log(palabrasParesModificadas);

function modificaPares(palabras, anonima) {
  let palabrasParesModificadas = [];
  for (const i in palabras) {
    if (((parseInt(i) + 1) % 2) == 0) {
      palabrasParesModificadas.push(anonima(palabras[i]));
    } else {
      palabrasParesModificadas.push(palabras[i]);
    }
  }
  return palabrasParesModificadas;
}

