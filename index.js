function getCharacters(done) {
    
    const results = fetch ("https://rickandmortyapi.com/api/character");
       
    results
    .then(response => response.json ())
    .then(data => {
        done (data)
    });
}
 
   getCharacters(data => {
  data.results.forEach( Personaje => {
    const article =document.createRange().createContextualFragment(/*html*/`
    <article>
    <div class="image_container">
       <img src="${Personaje.image}" alt="Personaje">
    </div>
    <h2>${Personaje.name}</h2>
    <span>${Personaje,String}</span>
</article>
    `);
    const main = document.querySelector("main");

    main.append(article);

});
    });
  
