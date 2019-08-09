var fs = require('fs');

// fs.mkdir('stuff', function () {
//     fs.readFile('./readMe.txt', 'utf8', function (err, data) {
//         fs.writeFile('./stuff/writeMe.txt', data, function () {
//         })
//     });
// });

// fs.unlink('./stuff/writeMe.txt', function () {
//     fs.rmdir('stuff', function () { });
// });

//=====Blocking versions=======

//make a dir

// fs.mkdirSync('stuff');

//remove a dir

// fs.rmdirSync('Stuff');