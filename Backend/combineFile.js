const fs = require('fs');

function readFileAsync(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath,'utf8',(err,data)=>{
            if (err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

async function conctenateFiles(){
    try {const [data1,data2] = await Promise.all([readFileAsync('file1.text','utf8'), readFileAsync('file2.text','utf8')])
        const combinesContent = data1+data2;
        console.log(combinesContent)
        
    } catch (error) {
        console.error(error)
        
    }
}

conctenateFiles();