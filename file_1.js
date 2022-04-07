
// // firstly importing "fs" module:-
const fs=require("fs");

// // creating a file and add something in that file:-
fs.writeFileSync("file.txt","my name is meena");

// //Appeding more information in that file without overwrite the data:-
fs.appendFileSync("file.txt","\nAnd i'm a creative and hardworking girl.")

// //reading file ,if file is existing:-
var data=fs.readFileSync("file.txt","utf8");
console.log(data)

//// changing or renaming the name of the file:-
// fs.renameSync("file.txt","my_file.txt")

// //Deleting file:-
// fs.unlinkSync("file.txt");