const fs=require(`fs`);

// Creating a folder
// fs.mkdir('example',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(`Folder created successfully`);
// });

//Deleting a folder
// fs.rmdir('example',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(`Folder created successfully`);
// });

//Creating a folder and then creating a file within that folder
// fs.mkdir('example',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.writeFile('./example/createdFile.txt','some data',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(`Successfully created file`);
//             }
//         });
//     }
// });

//Deleting a folder that is not empty

// fs.unlink('./example/createdFile.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(`Successfully deleted file`);
// });
// fs.rmdir('example',(err)=>{
//     if(err)
//     console.log(err);
// else
//     console.log(`Successfully deleted folder`);
// });

//Deleting a folder that has multiple files in it
// fs.readdir('./example',(err,files)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(files);
//         for(let file of files){
//             fs.unlink(`./example/${file}`,(err)=>{
//                 if(err)
//                     console.log(err);
//                 else
//                     console.log(`Sucessfully deleted ${file}`);
//             });
//         }
//     }
// });
