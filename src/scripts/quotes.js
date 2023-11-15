const stoicQuotes = [
    {
        quote: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
        author: "Epictetus"
    },
    {
        quote: "The happiness of your life depends upon the quality of your thoughts.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Man is affected not by events, but by the view he takes of them.",
        author: "Epictetus"
    },
    {
        quote: "He who lives in harmony with himself lives in harmony with the universe.",
        author: "Marcus Aurelius"
    },
    {
        quote: "The art of living is more like wrestling than dancing.",
        author: "Marcus Aurelius"
    },
    {
        quote: "The obstacle is the way.",
        author: "Ryan Holiday"
    },
    {
        quote: "It does not matter what you bear, but how you bear it.",
        author: "Seneca"
    },
    {
        quote: "Waste no more time arguing about what a good man should be. Be one.",
        author: "Marcus Aurelius"
    },
    {
        quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius"
    },
    {
        quote: "The best revenge is not to be like your enemy.",
        author: "Marcus Aurelius"
    }
];

const randomQuote = stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)];

const quoteElement = document.getElementsByClassName("quote")[0];
quoteElement.textContent = '\"' + randomQuote.quote + '\"';

const authorElement = document.getElementsByClassName("author")[0];
authorElement.textContent = '- ' + randomQuote.author;