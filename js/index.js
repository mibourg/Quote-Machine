$(document).ready(function () {
    displayRandomQuote();
    $("#new-quote").click(displayRandomQuote);
});

function displayRandomQuote() {

    $("#text").animate({ opacity: '0.25' }, "fast");
    $("#author").animate({ opacity: '0.25' }, "fast");

    $.getJSON("https://gist.githubusercontent.com/michelbourgeois/834c47f17fd2224dcfe5ec4adfa20c8f/raw/8af68029db795e2103a23d6f959e74613519d0e7/quotes.json", function (data) {
        var randomIndex = Math.floor(Math.random() * data.quotes.length);
        var quoteToDisplay = data.quotes[randomIndex];
        $("#text").html(quoteToDisplay.quote);
        $("#author").html("- " + quoteToDisplay.author);
        $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=\"" + quoteToDisplay.quote + "\" - " + quoteToDisplay.author);

        if (quoteToDisplay.quote.length >= 200 && $(window).width() > 1540) {
            $("#quote-box").css("height", "60%").css("width", "67.5%");
        } else if (quoteToDisplay.quote.length >= 200 && $(window).width() < 750) {
            $("#text").css("font-size", "1.5em");
            $("#author").css("font-size", "1.25em");
        } else {
            $("#quote-box").removeAttr("style");
            $("#text").removeAttr("style");
            $("#author").removeAttr("style");
        }

        $("#text").animate({ opacity: '1' }, "fast");
        $("#author").animate({ opacity: '1' }, "fast");
    });

    $.getJSON("https://raw.githubusercontent.com/dconnolly/chromecast-backgrounds/master/backgrounds.json", function (data) {
        var randomIndex = Math.floor(Math.random() * data.length);
        var backgroundImageURL = data[randomIndex].url;
        console.log(backgroundImageURL);
        $("body").css("background-image", "url(" + backgroundImageURL + ")");
    });

    $("body").animate({ opacity: '1' }, "slow");
}