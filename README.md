# 🧮 Sti - Campo Cantonale 2026 - Gestione Cambusa (Frontend)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.7-38B2AC.svg)](https://tailwindcss.com/)

## 🌟 Panoramica del Progetto
In vista del Campo Cantonale di Scoutismo Ticino 2026 a Campoblenio, la sezione logistica ha sviluppato questo strumento innovativo per la gestione efficiente delle derrate alimentari da distribuire ai differenti gruppi scout.

## 🏗 Architettura del Progetto
Questo repository contiene il frontend dell'applicazione. Il backend e le API sono sviluppati e gestiti in un repository separato.

- **Frontend (Questo Repository)**: Interfaccia utente e logica client-side
- **Backend ([Link al Repository Backend](https://github.com/your-organization/backend-repo))**: API e logica server-side

## 🛠 Stack Tecnologico

### Frontend (Questo Repository)
- **Framework**: [React](https://reactjs.org/) con [Hooks](https://reactjs.org/docs/hooks-intro.html)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **CI/CD**: GitHub Actions per integrazione continua e deployment automatizzato

## 📋 Prerequisiti
- [Node.js](https://nodejs.org/) (versione 14 o superiore)
- [npm](https://www.npmjs.com/) (6.14.0 o superiore) o [Yarn](https://yarnpkg.com/) (1.22.0 o superiore)
- [Git](https://git-scm.com/)

## 🚀 Configurazione e Avvio

1. **Clona il repository frontend**
   ```
   git clone https://github.com/tuorepository/sti-campo-cantonale-2026-frontend.git
   cd sti-campo-cantonale-2026-frontend
   ```

2. **Installa le dipendenze**
   ```
   npm install
   ```

3. **Configura le variabili d'ambiente**
   Crea un file `.env` nella root del progetto e configura l'URL dell'API:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Avvia l'ambiente di sviluppo**
   ```
   npm run dev
   ```

5. Apri `http://localhost:3000` nel tuo browser

## 🏗 Struttura a Micro-Frontend
Il progetto frontend è organizzato in micro-frontend:

- `cambusa-core`: Gestione centrale e routing
- `menu-planner`: Pianificazione dei menu
- `inventory-manager`: Gestione dell'inventario
- `distribution-system`: Sistema di distribuzione delle derrate

## 📁 Struttura del Codice Frontend
```
src/
├── micro-frontends/
│   ├── cambusa-core/
│   ├── menu-planner/
│   ├── inventory-manager/
│   └── distribution-system/
├── shared/
│   ├── components/
│   ├── utils/
│   └── hooks/
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
```

## 🔗 Integrazione con il Backend
- Il frontend comunica con il backend tramite API RESTful.
- Le chiamate API sono centralizzate nel file `src/services/api.js`.
- Per istruzioni su come configurare e avviare il backend, consulta il [README del repository backend](https://github.com/your-organization/backend-repo).

## 📢 Deployment
Il deployment di frontend e backend è gestito separatamente:

- **Frontend**: Deployato automaticamente su [Servizio di Hosting] tramite GitHub Actions.
- **Backend**: Consulta il repository backend per i dettagli sul suo deployment.

Per maggiori dettagli sul deployment del frontend, consulta `.github/workflows/deploy.yml`.

## 🤝 Contribuire
Siamo aperti a contributi sia per il frontend che per il backend! Per favore, leggi le [linee guida per contribuire](CONTRIBUTING.md) prima di iniziare.

## 📄 Licenza
Questo progetto è distribuito sotto la licenza MIT. Consulta il file [LICENSE](LICENSE) per tutti i dettagli.

## 📞 Contatti
Per domande o suggerimenti relativi al frontend o al backend, contatta il team di sviluppo a [email@esempio.com](mailto:email@esempio.com).
