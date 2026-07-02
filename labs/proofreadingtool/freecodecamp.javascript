function isPalindrome(word) {
  const text = word.toLowerCase();
  return text === text.split("").reverse().join("");
}

function findPalindromeBreaks(words) {
  if (words.length === 0) {
    return [];
  }

  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phrases = {};
  const repeated = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!phrases[phrase]) {
      phrases[phrase] = [];
    }

    phrases[phrase].push(i);
  }

  for (const phrase in phrases) {
    if (phrases[phrase].length > 1) {
      repeated.push(...phrases[phrase]);
    }
  }

  return repeated.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  return texts.map(words => ({
    repeatedPhrases: findRepeatedPhrases(words, phraseLength),
    palindromeBreaks: findPalindromeBreaks(words)
  }));
}

// Example usage
const texts = [
  ["level", "hello", "level", "hello"],
  ["racecar", "madam", "noon"]
];

console.log(analyzeTexts(texts, 1));
