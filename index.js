const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const str = tutorials[0];

console.log(str);

let tuts = tutorials.map(function(title) {return title.split(" ");});

console.log(tuts[0]);

const titleCased01 = () => {
  return tutorials
}


const titleCased = (tuts) => {
  return tutorials.map( line => {
    const words = line.split(" ");
    const tCdWords = 
      words.map( word => word.charAt(0).toUpperCase() + word.slice(1) );
    const tCdLine = tCdWords.join(" ");
    return tCdLine;
  });
}


const titleCased03 = (input) => {
  return tutorials.map( line => {
    const tokens = line.split(' ');
    const capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
    const response = capitalizedTokens.join(' ');
    return response;
  });
}