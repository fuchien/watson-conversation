var request = require("request");

// var options = { method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/upcoming',
//   qs: 
//    { 
//     //  page: '1',
//      language: 'pt-BR',
//      api_key: 'e7af7935c4c1ded50816a8fbf0e67bf1' },
//   body: '{}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   let data = JSON.parse(body)
//   let movies = data.results.filter(filmes => {
//       return filmes.release_date > '2017-08-01'
//   })
//   movies.forEach(movie => {
    
//     console.log(movie.title);
//   });
// });

const MOVIES = []
// for (let x=1; x<=10; x++) {
  request({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    qs: { 
     page: '2',
     language: 'pt-BR',
     api_key: 'e7af7935c4c1ded50816a8fbf0e67bf1'
    },
    body: '{}'
  }, function (error, response, body) {

    if (error) throw new Error(error);
  
    let data = JSON.parse(body)
    let movies = data.results.filter(filmes => {
        return filmes.release_date > '2017-10-01' && filmes.release_date < '2017-10-31'
    })
    movies.forEach(movie => {
      
      MOVIES.push(movie.title)
    });
    console.log(MOVIES)
  });
// }