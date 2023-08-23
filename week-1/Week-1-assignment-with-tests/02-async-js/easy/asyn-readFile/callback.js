const fs = require('fs');
function callback(err,data){
    console.log(data);
}

fs.readFile('a.txt', 'utf8', callback);
