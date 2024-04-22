#! /usr/bin/env node
// this is donation calculator means(in actual life you donate money to help someone)
// but for that kind of this help you actually get according to Holy Quran:
//  "you will get 7 times greater amount in form of godness in day of Judjement in maidaan-e-hashr"

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        name:"donation",
        message:"enter your donation amount which you want to donate",
        tyoe:"number"
    }
]);
let donation = answer.donation*7
console.log(`Your donated amount in the day of Judjement will be ${donation}: congratulations!`);
