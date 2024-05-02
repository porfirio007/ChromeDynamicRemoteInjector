const site = window.location.hostname;

// Funzione per ottenere la lista dei siti consentiti dall'API
async function fetchAllowedDomains() {
    try {
        const response = await fetch('http://localhost:8086/getAllowedDomaninsByIdChiamante/1');
        const data = await response.json();
        return data.map(entry => entry.dominio);
    } catch (error) {
        console.error('Errore durante il recupero dei domini consentiti:', error);
        return [];
    }
}

// Funzione per iniettare il codice JavaScript
function injectJSCode(code) {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.textContent = code;
    document.documentElement.appendChild(scriptElement);
}

// Funzione per iniettare un file JavaScript da CDN si potrebbe togliere
function injectJSLink(src) {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('src', src);
    document.documentElement.appendChild(scriptElement);
}

// Esegui il codice solo se il sito è consentito
async function executeIfAllowed() {
    const allowedDomains = await fetchAllowedDomains();
    if (allowedDomains.includes(site)) {
        fetch('http://localhost:8086/getCodeByIdChiamante/1')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const codiceSorgente = data[0].codiceSorgente;
                injectJSCode(codiceSorgente); 
            } else {
                console.error("Nessun dato trovato");
            }
        })
        .catch(error => {
            console.error('Errore durante la richiesta:', error);
        });

        // Si potrebbe togliere
        injectJSLink('https://schiano.altervista.org/peppe.js');
    } else {
        console.log('Questo sito non è consentito.');
    }
}

// Esegui la funzione principale
executeIfAllowed();
