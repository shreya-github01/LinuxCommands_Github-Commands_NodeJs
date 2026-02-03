const fs = require('fs');

fs.writeFileSync('example.txt', 'hello,world')
console.log("then main");
  
console.log("File written successfully");



console.log("File written successfully");    
fs.writeFile('example.txt', 'hello.world', (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }
    console.log("File written successfully");
});
