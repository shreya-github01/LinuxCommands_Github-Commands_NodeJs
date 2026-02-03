// console.log("Hello");
// console.log("World");
// function ayush(){
//     for(let i=0;i<500000;i++){
//         console.log(i);
//     }
// }
// ayush();
// console.log("Hello");


// console.log("Hello");
// console.log("World");
// setTimeout(()=>{
// function ayush(){
//     for(let i=0;i<500000;i++){
//         console.log(i);
//     }
// }
// ayush();
// console.log("Hello");


// import fs from 'fs';
const fs=require('fs');  //require -> bring code from another file or library

// fs. writeFile('example.txt', 'Hello,  World!', function(err){
//     if(err) console.log("aaya mera error");
//     ;
//     console.log('File created and data written');
// }
// );

// fs .appendFile('example.txt','My name is Sandhya',function(err){
//     if(err) console.log("error");
//     ;
//     console.log('Data appended');
// });

// fs .copyFile('example.txt',"examp_copy.txt",function(err){
//     if(err) console.log("error");
//     ;
//     console.log('Data appended');
// });

fs .rename('example.txt',"rename.txt",function(err){
    if(err) console.log("error");
    ;
    console.log('File is renamed');
});

fs .unlink("rename.txt",function(err){
    if(err) console.log("error");
    ;
    console.log('File is renamed');
});