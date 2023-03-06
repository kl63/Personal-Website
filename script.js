
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: true, 
  touch: true 
})

var quotes = [
	"Be the change you want to see in the world. -Mahatma Gandhi",
	"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
	"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
	"The only way to do great work is to love what you do. -Steve Jobs",
	"Believe you can and you're halfway there. -Theodore Roosevelt",
	"Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
	"Strive not to be a success, but rather to be of value. -Albert Einstein",
	"The best way to predict your future is to create it. -Abraham Lincoln",
	"Life is a journey, and if you fall in love with the journey, you will be in love forever. -Peter Hagerty",
	"I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison"
];
function generateQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById("quote").innerHTML = quotes[randomNumber];
}
setInterval(generateQuote, 5500);










  
  