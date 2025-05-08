const fs = require('fs');
const path = require('path');

const translations = {}; // Cambié el nombre de la variable

// Usamos un nombre diferente para la constante
['es', 'en', 'pt'].forEach(language => { 
  const filePath = path.join(__dirname, '..', 'locales', `${language}.json`);
  if (fs.existsSync(filePath)) {
    translations[language] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } else {
    console.error(`Archivo de traducción no encontrado para el idioma: ${language}`);
  }
});

function t(language, key) {
  const keys = key.split('.');
  let value = translations[language]; // Accedemos a las traducciones usando "translations"
  for (const k of keys) {
    value = value?.[k];
    if (!value) break;
  }
  return value || key; // Si no se encuentra la clave, devolvemos la clave
}

module.exports = { t };
