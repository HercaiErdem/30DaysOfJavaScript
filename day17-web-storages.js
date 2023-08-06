

// There are two Web Storage objects:
/*
- sessionStorage
- localStorage
localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, 
data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.
*/
// The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).

/*
Web Storage data is, in both cases, not available between different browsers. For example, storage objects created in Firefox cannot be accessed
 in Internet Explorer, exactly like cookies. 
 There are five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key()
*/

// Web Storage objects:

 localStorage.setItem("name", "hercai")
//console.log(localStorage)

console.log(localStorage.getItem("name"))
console.log(localStorage.removeItem("name"))

