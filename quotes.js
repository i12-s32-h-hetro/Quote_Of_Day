var arrayOfQuotes = [
    {
        "author":"Jim Rohn",
        "quote":"Become of what you become in pursuit of what you want."
    },
    {
        "author":"Epictetus",
        "quote":"Its not what happens to you, but how you react to it matters."
    },
    {
        "author":"Frank Sinatra",
        "quote":"The best revenge is massive success."
    },
    {
        "author":"Wayne Gretzy",
        "quote":"You miss 100% of the shots you don't take."
    },
    {
        "author":"Confucius",
        "quote":"Silence is a true friend who never betrays."
    },
    {
        "author":"Elbert Hubbard",
        "quote":"Do no take life too seriously.You will not out alive."
    }
]
function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}
function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '""'+ arrayOfQuotes[randomNumber].quote +'""';
    document.getElementById("authorOutput").innerHTML = "-"+ arrayOfQuotes[randomNumber].author;
}