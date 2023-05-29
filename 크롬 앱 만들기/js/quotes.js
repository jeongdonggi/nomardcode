const quotes = [
    {
        quote: "Set your house in perfect order before you criticize the world.", 
        author: "Jordan Peterson",
    },
    {
        quote: "Compare yourself to who you were yesterday, not to who someone else is today.", 
        author: "Jordan Peterson",
    },
    {
        quote: "Treat yourself like someone you are responsible for helping.", 
        author: "Jordan Peterson",
    },
    {
        quote: "To learn is to die voluntarily and be born again, in great ways and small.", 
        author: "Jordan Peterson",
    },
    {
        quote: "If you don't know what to do, pay attention to what makes you feel most alive.", 
        author: "Jordan Peterson",
    },
    {
        quote: "It is better to do something badly than to not do it at all.", 
        author: "Jordan Peterson",
    },
    {
        quote: "The purpose of life is finding the largest burden that you can bear and bearing it.", 
        author: "Jordan Peterson",
    },
    {
        quote: "You cannot be protected from the things that frighten you and hurt you, but if you identify with the part of your being that is responsible for transformation, then you are always equal or more than equal to the things that frighten you.", 
        author: "Jordan Peterson",
    },
    {
        quote: "Tell the truth, or at least don't lie.", 
        author: "Jordan Peterson",
    },
    {
        quote: "The meaning of your life is to find your gift. The purpose of your life is to give it away.", 
        author: "Jordan Peterson",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;