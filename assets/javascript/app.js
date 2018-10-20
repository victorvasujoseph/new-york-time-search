console.log('connected!!');

// Need to get the values from Submit

var searchTerm = "obama";
var numRecords = 5;
var yearStart = "19900101";
var yearEnd = "20180101";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var APIKey = '179a7ce7915d4f0abee6f48acc95b83f';

// Need to call during button click
var getArticles = function(){

    url += '?' + $.param({
        'api-key': APIKey,
        'q': searchTerm,
        'begin_date': yearStart,
        'end_date': yearEnd
      });

    $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {
        console.log(result);
      }).fail(function(err) {
        throw err;
      });
}

$('#searchBtn').on('click',function(event){
  event.preventDefault();
  getArticles();
  console.log("#searchBtn");
})



