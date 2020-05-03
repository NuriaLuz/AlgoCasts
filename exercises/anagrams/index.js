// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Here we are comparing that String A is the same as String B
function anagrams(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB)

}

// Helper function needed to help us and as well to clean up the code
// here we are getting rid of special characters, spaces, and then changed to lower case
//after that we split it to an array because we want to use the sort prototype 
//this will sort the array characters, and then we can join it back into an sorted string
function cleanStr(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;
