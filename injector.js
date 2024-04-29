
const site = window.location.hostname

const listaSiti = [
    '127.0.0.1',
    'www.google.com',
    'www.youtube.com',
    'www.wikipedia.org'
];




//Injecta JS da stringa
function injectJSCode(code) {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.textContent = code;
    document.documentElement.appendChild(scriptElement);
}

//Injecta JS da CDN 
function injectJSLink(src) {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('src', src);
    document.documentElement.appendChild(scriptElement);
}




// controllo presenza listaSiti
if (listaSiti.includes(site)) {

    fetch('http://localhost:8086/getCodeByIdChiamante/1')
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        codiceSorgente = data[0].codiceSorgente;
        //console.log("IL CODICE DA ESEGUIRE SARA' = ",codiceSorgente); 

        injectJSCode(codiceSorgente); 
      } else {
        console.error("Nessun dato trovato");
        codiceSorgente = null;
      }
    })
    .catch(error => {
      codiceSorgente = "console.log('wewe friariè');"; //null; 
      console.error('Errore durante la richiesta = ', error);
    });


    // si potrebbe togliere
    injectJSLink('https://schiano.altervista.org/peppe.js');
}






