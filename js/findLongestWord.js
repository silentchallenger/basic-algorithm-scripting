function findLongestWordLength(str) {
  let words = str.split(" ");
  let baseLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (baseLength < words[i].length) {
      baseLength = words[i].length;
    }
  }
  console.log(baseLength);
  return baseLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");