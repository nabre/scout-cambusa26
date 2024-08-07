# Guida di Stile del Progetto Gestione Cambusa

Questa guida di stile definisce le convenzioni di codifica per il progetto Gestione Cambusa del Campo Cantonale di Scoutismo Ticino 2026. Seguire queste linee guida è essenziale per mantenere la coerenza e la leggibilità del codice in tutto il progetto.

## Indice
1. [JavaScript/TypeScript](#javascripttypescript)
2. [React](#react)
3. [CSS/Tailwind](#csstailwind)
4. [Test](#test)
5. [Documentazione](#documentazione)
6. [Controllo Versione](#controllo-versione)

## JavaScript/TypeScript

### Formattazione
- Utilizzare 2 spazi per l'indentazione.
- Limite massimo di 80 caratteri per riga.
- Usare punto e virgola alla fine di ogni istruzione.
- Usare singole virgolette per le stringhe.

```javascript
const greet = (name) => {
  return `Ciao, ${name}!`;
};
```

### Naming Conventions
- Usare camelCase per variabili e funzioni.
- Usare PascalCase per classi e componenti React.
- Usare UPPER_CASE per costanti.

```javascript
const userName = 'Mario';
const MAX_ITEMS = 100;

class UserProfile extends React.Component {
  // ...
}
```

### Best Practices
- Preferire `const` su `let`. Usare `let` solo quando necessario.
- Evitare `var`.
- Utilizzare arrow functions per funzioni anonime.
- Utilizzare destructuring per oggetti e array.

```javascript
const { nome, età } = utente;
const [primoItem, ...altriItem] = lista;
```

## React

### Componenti
- Usare componenti funzionali con hooks.
- Ogni componente dovrebbe essere in un file separato.
- Nominare i file dei componenti con PascalCase (es. `UserProfile.jsx`).

```jsx
import React from 'react';

const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Età: {age}</p>
    </div>
  );
};

export default UserProfile;
```

### Props
- Utilizzare PropTypes per la validazione delle props.
- Destructuring delle props nella firma del componente.

```jsx
import PropTypes from 'prop-types';

const MenuItem = ({ name, price }) => {
  // ...
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
```

### Hooks
- Nominare i custom hooks con il prefisso `use`.
- Mantenere i hooks semplici e focalizzati su una singola funzionalità.

```jsx
const useInventoryStatus = (itemId) => {
  // ...
};
```

## CSS/Tailwind

- Utilizzare Tailwind CSS per lo styling.
- Evitare CSS inline a meno che non sia assolutamente necessario.
- Per stili complessi, creare componenti stilizzati o utilizzare @apply di Tailwind.

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Clicca qui
</button>
```

## Test

- Scrivere test per tutti i componenti e le funzioni principali.
- Utilizzare Jest e React Testing Library.
- Nominare i file di test con il suffisso `.test.js` o `.spec.js`.

```javascript
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders user name', () => {
  render(<UserProfile name="Mario" age={30} />);
  const nameElement = screen.getByText(/Mario/i);
  expect(nameElement).toBeInTheDocument();
});
```

## Documentazione

- Utilizzare JSDoc per documentare funzioni e componenti.
- Mantenere un README aggiornato per ogni micro-frontend.
- Documentare le decisioni di architettura importanti.

```javascript
/**
 * Calcola il totale dell'inventario.
 * @param {Object[]} items - Lista degli articoli nell'inventario.
 * @param {number} items[].quantity - Quantità di ciascun articolo.
 * @param {number} items[].price - Prezzo di ciascun articolo.
 * @returns {number} Il totale dell'inventario.
 */
const calculateInventoryTotal = (items) => {
  // ...
};
```

## Controllo Versione

- Utilizzare Git per il controllo versione.
- Seguire il modello Gitflow per il branching.
- Scrivere messaggi di commit chiari e descrittivi.

```
feat: aggiunge funzionalità di ricerca nell'inventario

- Implementa una barra di ricerca nel componente Inventario
- Aggiunge la logica di filtro lato client
- Aggiorna i test per coprire la nuova funzionalità
```

---

Questa guida di stile è un documento vivente. Se hai suggerimenti per migliorarla, per favore apri una issue o una pull request.

Ultimo aggiornamento: [Data]
