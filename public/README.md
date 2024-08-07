# Pagina Web Compilata

Questo branch (`gh-pages`) ospita la versione compilata del progetto.

## Flusso di Deploy

Il progetto viene distribuito automaticamente utilizzando il flusso di lavoro GitHub Actions definito in `./github/workflows/deploy.yml`.

## Installazione

Segui questi passaggi per clonare il repository e aggiornare i file con il branch `gh-pages`:

1. Clona il repository:

    ```bash
    git clone https://github.com/nabre/educalc.git educalc
    ```

2. Naviga nella directory del progetto:

    ```bash
    cd educalc
    ```

3. CompilatoVite, viene aggiornato il branch `gh-pages`. Di seguito vengono date le seguenti istruzioni al server:

    ```bash
    git fetch origin gh-pages
    git reset --hard origin/gh-pages
    ```