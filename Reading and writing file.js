var fs = require('fs');

//Read a file - non-blocking version
//readFile fxn will first read the text file. 
//Retrieved Text will be stored at 'data'.
//Callback function will then be executed.

// fs.readFile('textfile.txt', 'utf8', function (err, data) {
//     console.log(data);
//     fs.writeFile('textfilecopy.txt', data, function (err, data) { });
// });

//======== Deleting a file ============

// fs.unlinkSync('textfilecopy.txt');

//=========== Read a file - blocking version ============

// var text1 = fs.readFileSync('textfile.txt', 'utf8');
// console.log(text1);

// //Write a file
// fs.writeFileSync('copyOfTextfile.txt', text1);