
const readline=require('readline');
const rl=readline.createInterface({input:process.stdin,output:process.stdout});

let num1=10;
let num2=5;
let answer=num1+num2;

rl.question(`What is the sum of ${num1} and ${num2} ? `,(userInput)=>{
    if(userInput.trim()==answer){
        rl.close();
    }
    else{
        rl.setPrompt(`Incorrect answer , try again `);
        rl.prompt();
        rl.on(`line`,(userInput)=>{
            if(userInput==answer){
                rl.close();
            }
            else{
                rl.prompt();
            }
        })
    }
});

rl.on(`close`,()=>{
    console.log(`Correct answer`);
});
