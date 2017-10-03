var request = require("request");

var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
  qs: 
   { page: '1',
     language: 'pt-BR',
     api_key: 'e7af7935c4c1ded50816a8fbf0e67bf1' },
  body: '{}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  let data = JSON.parse(body)
  let filme = data.results.filter(filmes => {
      return filmes.release_date > '2017-10-24'
  })
  console.log(filme[0].title);
});