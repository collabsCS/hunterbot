const es = require('../locales/es.json');
const en = require('../locales/en.json');
const pt = require('../locales/pt.json');

const traducciones = {
  es,
  en,
  pt
};

function t(idioma, clave, devolverObjeto = false) {
  const partes = clave.split('.');
  let resultado = traducciones[idioma] || traducciones['es'];

  for (const parte of partes) {
    if (!resultado[parte]) return clave; // por si no existe la clave
    resultado = resultado[parte];
  }

  if (devolverObjeto) return resultado;
  return resultado;
}

module.exports = { t };
