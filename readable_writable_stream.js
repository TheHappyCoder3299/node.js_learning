const fs=require(`fs`);

//We are able to read and write data before the entire file loads 
//using readStream and writeStream

const readStream=fs.createReadStream('example.txt',`utf8`);
const writeStream=fs.createWriteStream('example2.txt');

//readStream inherits the event emitter class
// readStream.on(`data`,(chunk)=>{
//     writeStream.write(chunk);
// });

//Simpler way to write data from one file to another using streams
//pipes 

// readStream.pipe(writeStream);

//using pipe to read data and then write compressed files
const zlib=require(`zlib`);
// const gzip=zlib.createGzip();
// const writeStream2=fs.createWriteStream('example.txt.gz');
// readStream.pipe(gzip).pipe(writeStream2);

//unzipping files
const gunzip=zlib.createGunzip();
const readStream3=fs.createReadStream('example.txt.gz');
const writeStream3=fs.createWriteStream('uncompressed_file.txt');

readStream3.pipe(gunzip).pipe(writeStream3);