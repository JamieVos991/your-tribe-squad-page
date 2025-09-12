  const search = document.querySelector('input[type="search"]');
  const articles = document.querySelectorAll('section article');
  const paragraaf = document.querySelector('#paragraaf');

  search.addEventListener('input', () => {
    const zoeken = search.value.toLowerCase();

    articles.forEach(article => {
      const tekst = article.textContent.toLowerCase();
      if (tekst.includes(zoeken)) {
        article.style.display = ''; 
      } else {
        article.style.display = 'none'; 
      }
    });
  });
