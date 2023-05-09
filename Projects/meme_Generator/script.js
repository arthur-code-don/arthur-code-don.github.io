function clearAll() {
  const memeContainer = document.querySelector('.meme-content');
  const jokeContainer = document.querySelector('.joke-content');
  const quoteContainer = document.querySelector('.quote-content');
  const riddleContainer = document.querySelector('.riddle-content');


  memeContainer.innerHTML = '';
  jokeContainer.innerHTML = '';
  quoteContainer.innerHTML = '';
  riddleContainer.innerHTML = '';
}



function showMeme() {
  // Value is a string representing image URL
  const randomMemeUrl = getRandomData("memes");
  const container = document.querySelector('.meme-content');
  const newImg = document.createElement('img');
  newImg.setAttribute('src', randomMemeUrl);


  clearAll();

  container.appendChild(newImg);
}


function showJoke() {
  // Value is a string representing the joke
  const randomJokeText = getRandomData("jokes");
  const newP = document.createElement('p');
  
  newP.textContent = randomJokeText;

  clearAll();

  document.querySelector('.joke-content').appendChild(newP);
}


function showQuote() {
  // Value is in format: { quote: '', author: '' }
  const randomQuote = getRandomData("quotes");
  const quote = document.createElement('p');
  const author = document.createElement('p');
  
  quote.textContent = randomQuote.quote;
  author.textContent = "- " + randomQuote.author;

clearAll();

const container = document.querySelector('.quote-content');

container.appendChild(quote);
container.appendChild(author);
}


function showRiddle() {
  // Value is in format: { question: '', answer: '' }
  const randomRiddle = getRandomData("riddles");
 
  const { question, answer} = randomRiddle;
  const questionElem = document.createElement('p');
  
  questionElem.textContent = question;

  const answerElem = document.createElement('p');
  
  answerElem.textContent = 'The answer is: ' + answer;
  answerElem.setAttribute('id', 'riddle-answer');
  answerElem.hidden = true;

  const container = document.querySelector('.riddle-content');

  clearAll();

  container.appendChild(questionElem);
  container.appendChild(answerElem);

  // const question = randomRiddle.question;

  // const answer = randomRiddle.answer;

}


function revealAnswers() {
  
  const riddleContainer = document.querySelector('.riddle-content');
  const riddle = riddleContainer.querySelector('p');
  const answer = document.querySelector('#riddle-answer');

  // console.log(answer.hidden);
  if (riddle && answer.hidden) 
  {
    answer.hidden = false;

  } else if (riddle) {
    alert('The answer is already revealed!')
  } else {
    alert('There is no riddle to reveal the answer to!')
  }

}

/**
 * This function is used to get random data.
 * Valid arguments:
 *
 * 'memes', 'jokes', 'quotes', 'riddles'
 *
 * Return values:
 *
 * For meme data:
 * A string representing an image url
 *
 * For joke data:
 * A string representing the joke
 *
 * For quote data:
 * An object - { quote: '', author: '' }
 *
 * For riddle data:
 * An object - { question: '', answer: '' }
 *
 * usage: getRandomData('quotes');
 */
function getRandomData(type) {
  return data[type][rn(data[type].length)];
}


const memes = [
  "https://images2.memedroid.com/images/UPLOADED105/54ef37a0a297b.jpeg",
  "https://iq.opengenus.org/content/images/2020/03/human_interaction_opengenus.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZgYhOgyresqMjUDnWARwYV5bNHWxGFlF_Q&usqp=CAU",
  "https://codingbootcamps.io/wp-content/uploads/m8.png",
  "https://www.boredpanda.com/blog/wp-content/uploads/2022/03/clipimage-6229d953dfe08__700.jpg",
  "https://i.pinimg.com/736x/ac/b7/f9/acb7f99ba0ef473e03ee81e91a6281ee.jpg",
  "https://what.thedailywtf.com/assets/uploads/files/1612827607426-fa841c4b-fa0a-4275-9e8d-e9ca1d109e0b-image.png",
  "https://www.probytes.net/wp-content/uploads/2018/01/35643801_610768012614541_2730848912419061760_n.jpg",
  "https://i.pinimg.com/236x/c9/9d/c6/c99dc6486eee7fc43ed702f85d1acd9d--programming-humor-memes.jpg",
  "https://www.rvcj.com/wp-content/uploads/2015/12/semicolon.jpg",
  "https://testbytes.technoallianceindia.com/wp-content/uploads/2019/06/Untitled-63-1.png",
  "https://qph.cf2.quoracdn.net/main-qimg-960aef0da890432b31e29774f02c2b37-lq",
  "https://codinginfinite.com/wp-content/uploads/2019/05/ctrl-s-ctrl-s-ctrl-s-ctrl-s-unsaved-code-get-saved-35069666.jpg",
  "https://i.pinimg.com/736x/ea/21/4d/ea214df4b094e8e512aba08fedc3cf75.jpg",
  "https://starecat.com/content/wp-content/uploads/evil-programmer-goodbye-world.jpg",
  "https://qph.cf2.quoracdn.net/main-qimg-7a247e6b43fed36a17e0a355c8883703-pjlq",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuGgFS94Hcry3JKORuqQmF2_eoFJuKzUI8w&usqp=CAU",
  "https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/2.jpeg?lossy=1&strip=1&webp=1",
  "https://img-9gag-fun.9cache.com/photo/ayMPV8Y_460s.jpg",
  "https://media.licdn.com/dms/image/C5622AQFARn-TytJrDQ/feedshare-shrink_2048_1536/0/1660306491996?e=2147483647&v=beta&t=KabC3ZNK3pev17p2j-KtVcpfVGGEx-HJSfMuGmW5uUQ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmo482BxDAW87R1vj046EEmLbG7Ia1RPSuQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1BX2GhtztMsIrJDDzKveqXgbnKgziEdmdd-l4qhwS0xTtbxK0UdtabI1szkSpdrAMnw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKPygsaLTXNo9iU5zyyvbGDyaFE4Yfngmq63RNtNzJdStdW3GfBoGmlzSyFCGVEQgKdE&usqp=CAU",
  "https://i.etsystatic.com/35856128/r/il/3e2b5f/3997231773/il_fullxfull.3997231773_2ztl.jpg",
  "https://static.boredpanda.com/blog/wp-content/uploads/2021/08/programmer-coding-jokes-fb4.png",
  "https://cdn-media-1.freecodecamp.org/images/1*XSef56neX82fAPfHgxQxCw.jpeg",
  "https://thecodebytes.com/wp-content/webpc-passthru.php?src=https://thecodebytes.com/wp-content/uploads/2022/03/functional-programming-meme-3-1024x763.png&nocache=1",
  "https://media-exp1.licdn.com/dms/image/C4D22AQFkedvP_o0eng/feedshare-shrink_480/0/1656679854647?e=2147483647&v=beta&t=QtDVAq_qWaQEe6oEfgLW1jQNhIGVmGIgeZFP2I5roP8",
  "https://miro.medium.com/max/1208/0*kWuw5kTokrF_Znc2",
  "https://media-exp1.licdn.com/dms/image/C5622AQGpTJeW1bUNxw/feedshare-shrink_480/0/1669983734431?e=2147483647&v=beta&t=-zNmdcG0HmdqKCOs7dyTkshM-9QxfCLO-kJ_seFgbA0",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnKAbIG6dDJViWu6Fbw_mkUyOX5wCumv9X-g6-HHMTm2iFItgeiISnMp0GskFb9PmxIY&usqp=CAU",
  "https://i.imgflip.com/68y3zx.jpg"


];

const jokes = [
  "A SQL query goes into a bar, walks up to two tables and asks, “Can I join you?",
  "When your hammer is C++, everything begins to look like a thumb.",
  "Why are Assembly programmers always soaking wet? They work below C-level.",
  "Why do Java programmers have to wear glasses? Because they don't C#.",
  "How do you tell HTML from HTML5? Try it out in Internet Explorer. Did it work? No? It's HTML5.",
  "3 SQL databases walked into a NoSQL bar. A little while later they walked out, because they couldn't find a table.",
  "A programmer started to cuss Because getting to sleep was a fuss, As she lay there in bed, Looping round in her head was: while(!asleep()) sheep++",
  "Real programmers count from 0",
  "Two bytes meet. The first byte asks, “Are you ill? The second byte replies, “No, just feeling a bit off.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "I don't see women as objects. I consider each to be in a class of her own.",
  "What do computers and air conditioners have in common? They both become useless when you open windows.",
  "Software can be fast, reliable and cheap. Choose any two.",
  "The computer is mightier than the pen, the sword, and usually, the programmer.",
  "Why did the two Java methods get a divorce? Because they had constant arguments.",
  "Why did the edge server go bankrupt? Because it ran out of cache.",
  "Why did the private classes break up? Because they never saw each other.",
  "Why did the Java developer teach his young kids about single quotes? Because they build character.",
  "Why do programmers confuse Christmas with Halloween? Because OCT 31 is the same as DEC 25.",
  "What's the first step in understanding recursion? To understand recursion, you must first understand recursion.",
  "Why do submarines all run Linux? you can't open Windows under water.",
  "Why do they run Unix on the space shuttle? you can't open windows in space",
  "What happens when developers ask a silly question? They get a silly ANSI.",
  "This statement",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don't.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "Debugging: is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
  "(Programmer) What did 0 say to 1? You're a bit too much."
];

const quotes = [
{
  quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
  
  author: "Harold Abelson",
},

{
  quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
  
  author: "Rick Cook",
},

{
  quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
  
  author: "John Woods",
},

{
  quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  
  author: "Martin Fowler",
},

{
  quote: "Truth can only be found in one place: the code.",
  
  author: "Robert C. Martin",
},

{
  quote: "Java is to JavaScript what car is to Carpal tunnel.",

  author: "King Arthur",
},

{
  quote: "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
  
  author: "Larry Niven",
},

{
  quote: "You've baked a really lovely cake, but then you've used dog shit for frosting.",
  
  author: "Steve Jobs",
},

{
  quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
    
  author: "Alan J. Perlis",
},

{
  quote: "The most disastrous thing that you can ever learn is your first programming language.",
  
  author: "Alan Kay",
},

{
  quote: "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    
  author: "Joseph Weizenbaum",
},

{
  quote: "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
  
  author: "Brian Kernighan",
},

{
  quote: "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    
  author: "Ram Ray",

},

{ 
  quote: "First, solve the problem. Then, write the code.",
 
  author: "John Johnson",
},

{ 
  quote: "First, solve the problem. Then, write the code.",
  
  author: "John Johnson",
},

{ 
  quote: "Experience is the name everyone gives to their mistakes.",
  
  author: "Oscar Wilde",
},

{ 
  quote: " In order to be irreplaceable, one must always be different",
  
  author: "Coco Chanel",

},

{ 
  quote: "Java is to JavaScript what car is to Carpet.",
  
  author: "Chris Heilmann",
},

{ 
  quote: "Knowledge is power.",
  
  author: "Francis Bacon",
},

{
  quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
  
  author: "Dan Salomon",
},

{ 
  quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
  
  author: "Antoine de Saint-Exupery",
},

{  
  quote: "Ruby is rubbish! PHP is phpantastic",
  
  author: "Nikita Popov", 
},

{  
  quote: "Code is like humor. When you have to explain it, it's bad.",
  
  author: "Cory House",
},

{  
  quote: "Fix the cause, not the symptom.",
  
  author: "Steve Maguire", 
},

{ 
  quote: "Optimism is an occupational hazard of programming: feedback is the treatment.",
  
  author: "Kent Beck",
},

{ 
  quote: "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
  
  author: "Martin Fowler",
},

{
  quote: "Simplicity is the soul of efficiency.",
  
  author: "Austin Freeman",
},

{  
  quote: "Before software can be reusable it first has to be usable.",

  author: "Ralph Johnson",
},

{  
  quote: "Make it work, make it right, make it fast.",

  author: "Kent Beck", 
}
  

];

const riddles = [
{
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
},
{
    question:
      "You measure my life in hours and I serve you by expiring. I'm quick when I'm thin and slow when I'm fat. The wind is my enemy. ",
    answer: "A Candle",
},
{
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
},
{
    question:
      "What is seen in the middle of March and April that can't be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
},
{
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don't see a single person on the boat. Why?",
    answer: "All the people were married",
},
{
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
},
];

// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles,
};