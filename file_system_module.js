const fs=require(`fs`);

// fs.copyFile(`example.txt`,`C:\Users\anwit\Desktop\copiedFile.txt`,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(`Successfully copied`);
//     }
// });
// fs.readFile(`example.txt`,`utf`,(err,file)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(file);
//     }
    
// });

// created a file 
// fs.writeFile(`another_example.txt`,`This is another example text file`,(err)=>{
//     if(err)
//         console.log(err);
//     else
//     console.log(`Sucessfully created file`);

// });

// renaming a file
// fs.rename(`another_example.txt`,`renamed_example.txt`,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(`Sucessful,y renamed the file`);
//     }
// });


// appending data to a file
// fs.appendFile('example.txt',`\nSome data being appended to this file`,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('data appended sucessfuly');
//     }
// });

//deleting a file
fs.unlink(`file_to_be_deleted.txt`,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Successfully deleted file');
    }
})
