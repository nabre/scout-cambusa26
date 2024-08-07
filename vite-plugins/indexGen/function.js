import { readdirSync, statSync, existsSync, writeFileSync } from 'fs';
import { join, extname, relative, basename, dirname } from 'path';
import rootDirectories from './directories.json' assert { type: 'json' };// Importa i dati delle directory radice da un file JSON;

// Estensioni di file supportate per l'esportazione.
const supportedExtensions = ['.js', '.jsx', '.ts', '.tsx'];

// Nomi dei file index supportati, generati dalle estensioni supportate.
const indexFileNames = supportedExtensions.map(ext => `index${ext}`);

function getDirectoriesRecursively(directory) {
  let results = [];

  // Leggi il contenuto della directory corrente
  const list = readdirSync(directory);

  list.forEach(file => {
    const filePath = join(directory, file);

    // Verifica se il percorso corrente è una directory
    if (statSync(filePath).isDirectory()) {
      // Aggiungi la directory all'elenco dei risultati
      results.push(filePath);

      // Continua la ricerca in modo ricorsivo all'interno della directory
      results = results.concat(getDirectoriesRecursively(filePath));
    }
  });

  return results;
}

// Funzione per leggere i file in modo ricorsivo senza nidificare.
// directory: La directory di partenza da cui iniziare la ricerca.
function getFilesRecursively(directory) {
  let results = [];
  const list = readdirSync(directory);
  list.forEach(file => {
    const filePath = join(directory, file);
    const stat = statSync(filePath);
    if (stat && stat.isDirectory()) {
      // Aggiungi la directory se contiene un file index supportato
      const indexFile = indexFileNames.find(indexFileName => existsSync(join(filePath, indexFileName)));
      if (indexFile) {
        results.push(join(filePath, indexFile));
      } else {
        results = results.concat(getFilesRecursively(filePath));
      }
    } else {
      // Aggiungi il file se ha un'estensione supportata e non è un file index
      if (supportedExtensions.includes(extname(file)) && !indexFileNames.includes(basename(file))) {
        results.push(filePath);
      }
    }
  });
  return results;
}

// Funzione per generare il contenuto del file index.js
const generateFileContent = (rootDirectory) => {
  // Leggi tutti i file
  const files = getFilesRecursively(rootDirectory);

  // Crea il contenuto per il file index.js
  let fileContent = files.map(file => {
    const relativePath = `./${relative(rootDirectory, file).replace(/\\/g, '/').replace(/\.[^/.]+$/, '')}`;
    const fileName = basename(file, extname(file));
    // Se il file è un index, usa il nome della directory come export name
    const exportName = fileName === 'index' ? dirname(relativePath) : relativePath;
    return `export * from '${exportName}';`;
  }).join('\n').trim();

  // Scrivi il contenuto nel file index.js
  const indexPath = join(rootDirectory, 'index.js');

  if (fileContent === '') {
    // Se fileContent è vuoto, rimuovi il file index.js se esiste
    if (existsSync(indexPath)) {
      unlinkSync(indexPath);
      console.log(`\x1b[31m${indexPath}\x1b[0m - rimosso perché vuoto.`);
    }
  } else {
    // Altrimenti, scrivi il contenuto nel file index.js
    writeFileSync(indexPath, fileContent);
    console.log(`\x1b[33m${indexPath}\x1b[0m - creato con successo.`);
  }

}

// Genera i file index.js per tutte le directory radice
const baseRootDirectories = rootDirectories.map(path => join("./", path));
[...new Set([...baseRootDirectories, ...baseRootDirectories.map(path => join("./", path),).map(getDirectoriesRecursively).flat()])].sort((a, b) => b.localeCompare(a)).forEach(generateFileContent);
