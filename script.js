function firstWord(str) {
  if (str === "" || !str.includes(" ")) {
    // If the input string is empty or does not contain any space, return the entire string
    return str;
  } else {
    // Find the index of the first space
    const spaceIndex = str.indexOf(" ");
    
    // Extract and return the first word (characters up to the first space)
    return str.substring(0, spaceIndex);
  }
}

// Example usage:
const inputString = prompt("Enter String:");
alert(firstWord(inputString));
