const search = document.querySelector('input[type="search"]');
const articles = document.querySelectorAll('section article');

search.addEventListener('input', () => {
  const zoeken = search.value.toLowerCase();
  console.log(zoeken)

  articles.forEach(article => {
    const tekst = article.textContent.toLowerCase();
    if (tekst.includes(zoeken)) {
      article.style.display = ''; 
    } else {
      article.style.display = 'none'; 
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const favoKnop = document.querySelectorAll('.favorite-btn');
    const HartKnop = document.querySelector('#favorites-toggle');
    const studenten = document.querySelector('section.students');

    // Maak een array van alle artikelen in de sectie
    const articles = Array.from(studenten.querySelectorAll('article'));
  
    // Maak een Set om de gefavoriete artikelen bij te houden (Set voorkomt dubbele items)
    let favoritesLog = new Set(); 
  
    // Loop door elke hart-knop in de artikelen
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

    // Voeg een klik-event toe op het hartje in de aside om favorieten te tonen/verbergen
    HartKnop.addEventListener('click', (e) => {
        e.preventDefault(); // voorkom dat het <a>-element de pagina navigeert

        // Controleer of de sectie al in "toon alleen favorieten"-modus staat
        if (studenten.dataset.showFavorites === 'true') {
            // Laat alle artikelen zien
            articles.forEach(article => article.style.display = '');
            studenten.dataset.showFavorites = 'false'; // update de status
        } else {
            // Laat alleen de artikelen zien die in de favorites staan
            articles.forEach(article => {
                article.style.display = favoritesLog.has(article) ? '' : 'none';
            });
            studenten.dataset.showFavorites = 'true'; // update de status
        }
    });
});
