$(document).ready(function () {
    // console.log("ready!");

    // var nytQueryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    // var apiKey = "api-key=GtNfFypF3QwVlvqB0XI08s27QGBtgF0R"
    // ^^^ This above isn't fully coded. We need to figure out how to use query terms like q=election

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GtNfFypF3QwVlvqB0XI08s27QGBtgF0R";

    //fq=source:("The New York Times")

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // There is a response within our response. So all of our dot notation must start with "response.response"
        // console.log(response.response);

        var articleInfo = response.response.docs;
        // NOTE: articleInfo has 10 docs. That is the default number of articles returned.

        // Hard code pulling the first docs index position.
        // console.log(articleInfo[0]);

        // docs[0] returns this. Keep in mind the console truncates some of that text. The ... in the middle don't display when we refer to something more specific.:
        // abstract: "Russian intelligence services are trying to incite…ted States, American intelligence officials said."
        // web_url: "https://www.nytimes.com/2020/03/10/us/politics/russian-interference-race.html"
        // snippet: "Russian intelligence services are trying to incite…ted States, American intelligence officials said."
        // lead_paragraph: "WASHINGTON — The Russian government has stepped up…merican officials briefed on recent intelligence.",

        // console.log(articleInfo[0].abstract);
        // console.log(articleInfo[0].web_url);
        // console.log(articleInfo[0].snippet);
        // console.log(articleInfo[0].lead_paragraph);

        for (i=0; i<articleInfo.length; i++){
            console.log("Article " + (i+1) + " snippet: " + articleInfo[i].snippet);
        }
    })
});


// # New York Times Article Search - Phase 02
// ## Front-End Team

// * Begin creating basic click events. Register the submit button

// * Create working transfers of data between the text-boxes and the backend.

// * Experiment with creating content regions for where the article will go.

// ## Back-End Team

// * Create the AJAX call needed to retrieve data then console.log all of the relevant fields.
//DONE

// * Incorporate various “optional parameters” (hard code these in initially).

// * Take note of various “bugs” that appear with certain searches.

// ## All-Together

// * Display the HTML content!!