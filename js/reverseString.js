function reverseString(str) {
  let chars = str.split("");
  chars = chars.reverse();
  str = chars.join("");
  console.log(str);
  return str;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");