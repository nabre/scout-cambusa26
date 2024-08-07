import directories from './directories.json' assert { type: 'json' };// Importa i dati delle directory radice da un file JSON;
import { exec } from 'child_process';
import { promisify } from 'util';
import { resolve } from 'path';

const execAsync = promisify(exec);

const fileChangeWatcher = [
  resolve("./vite-plugins/indexGen", 'directories.json'),
];

export default function generateIndexPlugin() {
  return {
    name: 'generate-index-plugin',
    configureServer(server) {

      fileChangeWatcher.forEach(directory => {
        server.watcher.add(resolve("./", directory));
      });

      directories.forEach(directory => {
        server.watcher.add(resolve("./", directory));
      });

      server.watcher.on('add', async (filePath) => {
        await handleFileChange(filePath, server);
      });

      server.watcher.on('change', async (filePath) => {
        if (!fileChangeWatcher.includes(filePath)) return;
        await handleFileChange(filePath, server);
      });

      server.watcher.on('unlink', async (filePath) => {
        await handleFileChange(filePath, server);
      });

      async function handleFileChange(filePath, server) {
        if (filePath.match(/index\.(js|ts|jsx|tsx)$/)) {
          // Ignora le modifiche ai file index.* generati
          return;
        }

        console.log(`Modifica rilevata in ${filePath}, eseguendo indexGen...`);
        try {
          await execAsync('node ./vite-plugins/indexGen/function.js');
          console.log('indexGen eseguito con successo.');
          server.ws.send({ type: 'full-reload' });
        } catch (error) {
          console.error('Errore durante l\'esecuzione di npm run indexGen:', error);
        }
      }
    }
  };
}
