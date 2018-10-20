console.log('connected!!');
<<<<<<< HEAD

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "179a7ce7915d4f0abee6f48acc95b83f"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
=======
var url = "http://developer.nytimes.com/article_search_v2.json";
>>>>>>> 48cfdc1b22b7f719bff05918c8c05ea10183a975
