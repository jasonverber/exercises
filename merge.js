/**
 * Merges ALL strings passed to the function by interleaving them.
 * @param {...string} args - ANY number of strings.
 */

merge = (...args) => {
  //Using a rest parameter (...args) because ES6 (ECMAScript 2015) arrow functions don't include the arguments array.
  //This way the function will support any number of strings, not just the two needed for the initial examples.
  //This should extend the lifespan of the function.

  //Before going any further, check if this is the last recursion. If no array is longer than zero, we're done.
  if (args.reduce((a,b)=>a+b.length, 0) === 0) return '';

  //Set initial empty string to which everything else will be appended.
  var string = '';

  //If this is the first time through, the arguments are still strings. Make them arrays of characters. Start over.
  //This line uses ES6's spread feature to pass the args array as parameters. But first we split each element.
  if (!Array.isArray(args[0])) return merge(...args.map(a=>a.split('')));

  //The heart of the function. Use reduce to build up a string consisting of the first element (if any) of each array.
  string += args.reduce((a,b) => a+(b.length>0 ? b.shift() : ''), '');

  //By shifting the first element off of each remaining array, we are ready to recurse and add any remaining characters.
  //This recursion will continue only the check above determines every array has a length of zero.
  string += merge(...args);

  //Return the string built up from this level of recursion, or, if this is the primary loop, the final string.
  return string;
}

merge('abc') === 'abc';
merge('abc', '123') === 'a1b2c3';
merge('abc', '123456') === 'a1b2c3456';
