
document.querySelector('.search-btn').addEventListener('click', () => {
    let input_value = document.querySelector('#search-text').value;
    console.log(input_value);
    getMovieData(input_value);

})

function getMovieData(value) {
    setTimeout(() => {
        fetch(`https://www.omdbapi.com/?s=${value}&apikey=bea7ac38`)
            .then(Response => Response.json())
            .catch('!not Found. please correct the spelling')
            .then(data => {

                var movie = data.Search;
                
                for (let i = 0; i < movie.length; i++)
                 {
                    let html = `<div class="movie-card">
                      <div class="poster"><img src="${movie[i].Poster}"alt="poster"></div><div class="content"></div></div>`;
    
                    document.querySelector('.cards').insertAdjacentHTML('afterbegin',html);
                }
               



            })
            .catch(data =>{
                let error = `<div class="error"><p>! Movie not Found . Kindle check the spelling input</p>
            </div>`
            document.querySelector('.cards').insertAdjacentHTML('afterbegin', error);
            });
            
    })
};