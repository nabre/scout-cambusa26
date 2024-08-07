# 🧮 Sti - campo cantonale 2026 - gestione cambusa

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.7-38B2AC.svg)](https://tailwindcss.com/)

## 🌟 Caratteristiche Principali
In occasione del campo cantonale di scoutismo ticino che si terrà nel 2026 a Campoblenio, per la gestione delle derrate alimentari da distribuire ai differenti gruppi scout, la sezione logistica ha sviluppato questo stumento.

## 🛠 Stack Tecnologico

- **Frontend**: [React](https://reactjs.org/) con [Hooks](https://reactjs.org/docs/hooks-intro.html) per una UI reattiva e componenti riutilizzabili.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) per un design rapido e responsivo.
- **Build Tool**: [Vite](https://vitejs.dev/) per un'esperienza di sviluppo ultra-rapida.
- **CI/CD**: GitHub Actions per integrazione continua e deployment automatizzato

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- [Node.js](https://nodejs.org/) (versione 14 o superiore)
- [npm](https://www.npmjs.com/) (6.14.0 o superiore) o [Yarn](https://yarnpkg.com/) (1.22.0 o superiore)
- [Git](https://git-scm.com/) per il controllo versione


## 🚀 Configurazione e Avvio

1. **Clona il repository**
   ```
   git clone https://github.com/tuorepository/sti-campo-cantonale-2026.git
   cd sti-campo-cantonale-2026
   ```

2. **Installa le dipendenze**
   ```
   npm install
   # oppure
   yarn install
   ```

3. **Avvia l'ambiente di sviluppo**
   ```
   npm run dev
   # oppure
   yarn dev
   ```

4. Apri `http://localhost:3000` nel tuo browser


## 🏗 Struttura a Micro-Frontend

Il progetto è organizzato in micro-frontend per una migliore separazione delle responsabilità:

- `cambusa-core`: Gestione centrale e routing
- `menu-planner`: Pianificazione dei menu
- `inventory-manager`: Gestione dell'inventario
- `distribution-system`: Sistema di distribuzione delle derrate

Ogni micro-frontend è sviluppabile e testabile in modo indipendente.

## 📁 Struttura del Codice

```
src/
├── micro-frontends/
│   ├── cambusa-core/
│   ├── menu-planner/
│   ├── inventory-manager/
│   └── distribution-system/
└── shared/
    ├── components/
    ├── utils/
    └── hooks/
```

## 🔧 Implementazione dello Sviluppo

1. Crea un nuovo branch per ogni feature: `git checkout -b feature/nome-feature`
2. Implementa la tua feature nel micro-frontend appropriato
3. Scrivi test per la tua implementazione
4. Fai commit delle tue modifiche: `git commit -am 'Aggiungi nuova feature'`
5. Pusha il branch: `git push origin feature/nome-feature`
6. Apri una Pull Request su GitHub

## 📢 Pubblicazione dell'Applicazione

Il deployment è automatizzato tramite GitHub Actions:

1. I merge in `develop` triggherano un deploy nell'ambiente di staging
2. I merge in `main` triggherano un deploy in produzione

Per maggiori dettagli, consulta il file `.github/workflows/deploy.yml`.

## 🤝 Contribuire

Siamo aperti a contributi! Per favore, leggi le [linee guida per contribuire](CONTRIBUTING.md) prima di iniziare.

## 📄 Licenza

Questo progetto è distribuito sotto la licenza MIT. Consulta il file [LICENSE](LICENSE) per tutti i dettagli.

## 📞 Contatti

Per qualsiasi domanda o suggerimento, contatta il team di sviluppo a [email@esempio.com](mailto:email@esempio.com).