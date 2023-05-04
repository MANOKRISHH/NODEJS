//ES5
const fs = require('fs');
/*
//reading the synchronous
let data = fs.readFileSync("classnotes.txt", "utf-8");
console.log(data);
*/
//reading a asynchronous and writing newData

fs.readFile("classnotes.txt","utf-8",(err,newData)=>{
    fs.writeFile("one.txt",newData, ()=>{
        if (err) throw err;
        console.log("writing file successfully")
    })
})

