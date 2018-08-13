
var renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))


var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    }).fail(error => {
      displayError()
    })
}








$(document).ready(function (){





});
