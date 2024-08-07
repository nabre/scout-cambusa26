import { exec } from 'child_process';
import { promisify } from 'util';
import { resolve } from 'path';

const execAsync = promisify(exec);

const fileChangeWatcher = [
  resolve("./", 'package.json'),
];

export default function readmeMarkVersion() {
  return {
    name: 'generate-index-plugin',
    configureServer(server) {

      fileChangeWatcher.forEach(directory => {
        server.watcher.add(resolve("./", directory));
      });

      server.watcher.on('change', async (filePath) => {
        if (!fileChangeWatcher.includes(filePath)) return;
        await handleFileChange(filePath, server);
      });

      async function handleFileChange(filePath, server) {
        console.log(`Modifica rilevata in ${filePath}, eseguendo readmeMarkVersion...`);
        try {
          await execAsync('node ./vite-plugins/readmeMarkVersion/function.js');
          console.log('readmeMarkVersion eseguito con successo.');
          server.ws.send({ type: 'full-reload' });
        } catch (error) {
          console.error('Errore durante l\'esecuzione di npm run readmeMarkVersion:', error);
        }
      }
    }
  };
}
