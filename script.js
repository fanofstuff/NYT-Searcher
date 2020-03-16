$(document).ready(function () {
    console.log("ready!");

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GtNfFypF3QwVlvqB0XI08s27QGBtgF0R";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
});