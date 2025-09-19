const search = document.querySelector('input[type="search"]');
const articles = document.querySelectorAll('section article');

// Maakt een event voor de input
search.addEventListener('input', () => {

  // Slaat de input in een variable op en maakt deze ik kleine letters
  const zoeken = search.value.toLowerCase();

  // Maakt een loop die door de articles gaat
  articles.forEach(article => {
    // Maakt een variable aan die de text van de article pakt
    const tekst = article.textContent.toLowerCase();

    // Als de text van de article matched met de input value laat die articles dan zien
    if (tekst.includes(zoeken)) {
      article.style.display = ''; 
      // En anders zet de articles op display none
    } else {
      article.style.display = 'none'; 
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const favoKnop = document.querySelectorAll('.favoriet-knop');
    const HartKnop = document.querySelector('#favoriet-nav-knop');
    const studenten = document.querySelector('section.article-section');

    // Maak een array van alle artikelen in de sectie
    const articles = Array.from(studenten.querySelectorAll('article'));
  
    // Maak een Set om de favoriete artikelen bij te houden (Set voorkomt dubbele items)
    let favoritesLog = new Set(); 
  
    // Loop door elke hart knop in de artikelen
    favoKnop.forEach(btn => {

        // Vind het dichtstbijzijnde artikel dat bij deze knop hoort
        const article = btn.closest('article');
  
        // Voeg een klik event toe om het favoriet zijn te toggelen
        btn.addEventListener('click', () => {

            // Als het artikel al favoriet is, verwijder het uit de favorites
            if (favoritesLog.has(article)) {
                favoritesLog.delete(article);
            } else {
                // Als het artikel nog niet favoriet is, voeg het toe
                favoritesLog.add(article);
            }
        });
    });

    // Voeg een klik event toe op het hartje in de aside om favorieten te tonen/verbergen
    HartKnop.addEventListener('click', (e) => {
        e.preventDefault(); // Voorkomst refresh

        // Controleer of de sectie al in "toon alleen favorieten" modus staat
        if (studenten.dataset.showFavorites === 'true') {
            // Laat alle artikelen zien
            articles.forEach(article => article.style.display = '');
            studenten.dataset.showFavorites = 'false'; // update de status
        } else {
            // Laat alleen de artikelen zien die in de favorites staan
            articles.forEach(article => {
                article.style.display = favoritesLog.has(article) ? '' : 'none';
            });
            studenten.dataset.showFavorites = 'true'; 
        }
    });
});
