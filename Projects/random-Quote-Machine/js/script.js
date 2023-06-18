// script.js
const clientID = "HsimO1XaBQjQnTHhmleW127fpljY7cySE1bWgCXGhmg";

// Array of quotes
let quotes = [];

// Function to fetch quotes from the API
async function fetchQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    quotes = data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }
}

// Function to get a random quote from the quotes array
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function updateQuote() {
  const quote = getRandomQuote();
  const quoteText = `"${quote.text}"`; // Add quotation marks around the quote text
  document.getElementById('text').textContent = quoteText;
  document.getElementById('author').textContent = `- ${quote.author}`;
}

async function fetchBackgroundImage() {
  try {
    const timestamp = Date.now();
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${clientID}&_=${timestamp}`
    );
    const data = await response.json();
    const imageUrl = data.urls.regular;
    document.body.style.backgroundImage = `url(${imageUrl})`;
  } catch (error) {
    console.error('Error fetching background image:', error);
  }
}

// Function to set the background image and update the background color
async function setBackgroundImage() {
  await fetchBackgroundImage();
  updateBackgroundColor();
}

// Function to update the background color of the quote box
function updateBackgroundColor() {
  const colors = [
    '#FFC0CB', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#FFA500',
    '#800080', '#196f3d', '#341b5b', '#505f72', '#764818', '#374753', '#2ac304',
    '#f761a2', '#caa649', '#123456', '#789012'
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  document.getElementById('quote-box').style.backgroundColor = color;
}

// Event listener for the "new-quote" button click
document.getElementById('new-quote').addEventListener('click', async (event) => {
  event.preventDefault();
  await setBackgroundImage();
  updateQuote();
});

// Fetch quotes and update on page load
fetchQuotes().then(async () => {
  await setBackgroundImage();
  updateQuote();
  updateBackgroundColor();
});


