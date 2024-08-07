# 🧮 Progetto - educalc

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.7-38B2AC.svg)](https://tailwindcss.com/)

## 🌟 Caratteristiche Principali
EduCalc è progettato per fornire strumenti avanzati di apprendimento personalizzato, focalizzati sul problem solving nell'ambito del calcolo professionale. L'obiettivo è integrare fenomeni fisici e tecniche matematiche in modo funzionale per supportare la produzione quotidiana nella vita professionale.

## 🛠 Stack Tecnologico

- **Frontend**: [React](https://reactjs.org/) con [Hooks](https://reactjs.org/docs/hooks-intro.html) per una UI reattiva e componenti riutilizzabili.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) per un design rapido e responsivo.
- **Build Tool**: [Vite](https://vitejs.dev/) per un'esperienza di sviluppo ultra-rapida.
- **Animazioni**: [Framer Motion](https://www.framer.com/motion/) per transizioni fluide e coinvolgenti.

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- [Node.js](https://nodejs.org/) (versione 14 o superiore)
- [npm](https://www.npmjs.com/) (6.14.0 o superiore) o [Yarn](https://yarnpkg.com/) (1.22.0 o superiore)
- [Git](https://git-scm.com/) per il controllo versione

## 🚀 Guida Rapida

1. **Clona il Repository**
   ```bash
   git clone https://github.com/nabre/educalc.git
   cd educalc
   ```

2. **Installa le Dipendenze**
   ```bash
   npm install
   # oppure
   yarn install
   ```

3. **Avvia l'Ambiente di Sviluppo**
   ```bash
   npm run dev
   # oppure
   yarn dev
   ```

4. **Apri nel Browser**
   Visita [http://localhost:3000](http://localhost:3000) per vedere l'applicazione in azione.

## 📦 Build e Deploy

### Build Locale

Per creare una build di produzione ottimizzata:

```bash
npm run build
# oppure
yarn build
```

I file ottimizzati saranno generati nella cartella `dist/`.

### 🔄 Continuous Deployment

Il progetto utilizza GitHub Actions per un processo di CI/CD automatizzato. Il workflow è definito in `.github/workflows/deploy.yml`.

#### Processo di Deploy

1. **Trigger**: Ogni push sul branch `main` attiva il workflow.
2. **Build**: Il progetto viene compilato in un ambiente Node.js.
3. **Test**: Vengono eseguiti test automatizzati per garantire la qualità del codice.
4. **Deploy su GitHub Pages**: La build viene pubblicata sul branch `gh-pages`.
5. **Sincronizzazione con Host Remoto**: I file vengono sincronizzati con un server di produzione.

#### Configurazione

Configura le seguenti variabili segrete nel tuo repository GitHub:

- `ACTIONS_DEPLOY_KEY`: Token di accesso per GitHub Actions
- `HOST`: Indirizzo IP o dominio del server di produzione
- `USERNAME`: Nome utente SSH per l'accesso al server
- `PASSWORD`: Password SSH (considera l'uso di chiavi SSH per una maggiore sicurezza)
- `PATH`: Percorso di destinazione sul server remoto

### Installazione sul Server Remoto

Per una configurazione manuale sul server di produzione:

1. Accedi al server via SSH
2. Clona il repository:
   ```bash
   git clone https://github.com/nabre/educalc.git /path/to/educalc
   ```

## 📄 Licenza

IUl progetto è distribuito sotto la licenza MIT. Consulta il file [LICENSE](../../tree/develop?tab=License-1-ov-file#italiano) per tutti i dettagli.