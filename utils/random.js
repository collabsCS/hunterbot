function obtenerRandom(arr, cantidad = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`obtenerRandom esperaba un array, pero recibió: ${typeof arr}`);
  }

  const copia = [...arr];
  const seleccionados = [];

  for (let i = 0; i < cantidad && copia.length; i++) {
    const index = Math.floor(Math.random() * copia.length);
    seleccionados.push(copia.splice(index, 1)[0]);
  }

  return seleccionados;
}

module.exports = { obtenerRandom };
