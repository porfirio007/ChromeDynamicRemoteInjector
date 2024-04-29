/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* Example #2: inject same code into multiple websites using Logical OR (||) */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
if (
    site.includes('127.0.0.1') ||
    site.includes('www.google.com') ||
    site.includes('www.youtube.com') ||
    site.includes('www.wikipedia.org')
) {
    // Put your injection process right here
}




/* -------------------------------------------------------- */
/* -------------------------------------------------------- */
/* Example #3: inject separate codes into separate websites */
/* -------------------------------------------------------- */
/* -------------------------------------------------------- */
// Inject codes into `127.0.0.1`
if (site.includes('127.0.0.1')) { /* Put your injection process right here */ }

// Inject codes into `www.google.com`
if (site.includes('www.google.com')) { /* Put your injection process right here */ }

// Inject codes into `www.youtube.com`
if (site.includes('www.youtube.com')) { /* Put your injection process right here */ }

// Inject codes into `www.wikipedia.org`
if (site.includes('www.wikipedia.org')) { /* Put your injection process right here */ }
