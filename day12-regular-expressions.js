
//Declaring regular expression without global flag and case insensitive flag.
// without flag

let pattern = "love"

let regEx= new RegExp(pattern)

// Declaring regular expression with global flag and case insensitive flag.

// i case sensetive i ortadan kaldırıyor
// g de o cümlede gecen bütün regExp leri alır, eğer g demezsek o cümlede ki ilk regExp i alır.

let pattern02 = "love"
 flag = "gi"
let regEx02 = new RegExp(pattern02, flag)

let regEx03 = new RegExp("love", "gi")

// Declaring regular expression with global flag and case insensitive flag.

let regEx04 = /love/gi 

let regEx05 = new RegExp("love", "gi") //regEx04 eşittir

// test():Tests for a match in a string. It returns true or false

const str = "I LOVE javascript"
const pattern03 = /love/i
const result = pattern03.test(str)
console.log(result)

const testedString = "Merhaba bugun cok calistim ve BUGUN masa tenisi oynamaya gittim"
testedStringPattern = /BugUN/gi
const testString =testedStringPattern.test(testedString)
console.log("bugun: "+testString)



const comment = prompt("Bana iltifat et")
 word = /güzel/i
const testWord = word.test(comment)
 console.log(testWord)


// match() returns an array containing the pattern, index, input and group

const string = "I love myself and I LOVE my world"
const pattern04 = /love/gi
const matchControl = string.match(pattern04)
console.log(matchControl)

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const searchControl = string.search(pattern04)
console.log(searchControl)


const sntc = prompt("write my full name")
 searchMyName = /hercai/gi
const searchMyNameControl = sntc.search(searchMyName)
console.log(searchMyNameControl)


// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

let txt = "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language"

replaceTxt = txt.replace(/python/gi, "JavaScript")
console.log(replaceTxt)


let myReplaceStr = "Hi! I am a QA and I love my job and my world, I just come to here and want to say that because I really feel lucky girl in the world"
 replaceStr = myReplaceStr.replace(/MY/gi, "**")
console.log(replaceStr)

const txt02 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

replaceText02 = txt02.replaceAll("%", "") // 1. yol
console.log(replaceText02)

replaceText03 = txt02.replace(/%/g, "")
console.log(replaceText03)

/*
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group

*/

let str02 = " Ben 25 yasindayim ve 1997 doğumluyum."
numCharacters = str02.match( /[0-9]/g)    // bu cümlede gecen bütün sayilari almanin 1. yolu
console.log(numCharacters)

bringAllNumWithChar = str02.match(/\d/g)
console.log(bringAllNumWithChar) // 2.yol

bringAllLetter = str02.match(/\D/g)
console.log(bringAllLetter)

boundryLetter = str02.match(/\b\w{3}\b/g)
console.log(boundryLetter)

boundryNmbr = str02.match(/\b\d{2,4}\b/g)
console.log(boundryNmbr)

const sentence= "Hello! my name is Hercai"
pattern = (/^hello!/i)
startWith = sentence.match(pattern)
console.log(startWith)

const name = "taylant"
const patternName = /e?t$/i 
const testPatternName = patternName.test(name)
console.log(testPatternName)
