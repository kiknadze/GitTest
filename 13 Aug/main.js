let regEx = new RegExp('abcd'); //new RegExp(pattern, flags)
let regEx2 = /abcd/;  // /pattern/flags

//text(), exec()

let sourceStr = 'Hello RegExp';
let helloRegEx = /Hello/;

let result = helloRegEx.test(sourceStr);
let result2 = helloRegEx.exec(sourceStr)
console.log(result)
console.log(result2)

console.log(/^\d{10}$/.test(''))
console.log(/^(\d{1,2}-){2}\d{2}(\d{2})?$/.test('02-08-1993'))