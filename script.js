//Random number Generation in JavaScript
// let n = Math.random();
// 0 = 0.9999999999999999
// 0 and 0.9 to 16 decimal places, and it never ever reaches 1

//a)
// let n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// alert(n);
// console.log(n);

//b)
// prompt("What is your name?");
// prompt("What is their name?");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert("Your love score is " + loveScore + "% chyragym!");
// console.log("Your love score is " + loveScore + "% chyragym!");

//c)
// --------------IF - ELSE - LOGIC----------------
// if the track is equal to clear then we take the flow of the code into the curly
// braces straight after and then we run the function goStraight. If that condition is not true,
// i.e. track does not equal clear, then the code flows to the else statement,
// and we run the function turnRight instead.
// if (track === "clear"){ 
//  goStaright();
// } 

// else {
// turnRigt();
// }

//d)
// prompt("What is your name?");
// prompt("What is their name?");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 55){
//     alert("Your love score is " + loveScore + "% chyragym! Masha Allah, may Allah bless You!");
//     console.log("Your love score is " + loveScore + "% chyragym!");
// }
// else {
//     alert("Your love score is " + loveScore + "% chyragym!");
//     console.log("Your love score is " + loveScore + "% chyragym!");
// }

//e) Comparators and Equality ------- && ------ || ------ect
prompt("What is your name?");
prompt("What is your favorite mountain in Kyrgyzstan?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 55){
    alert("Your love score is " + loveScore + "% chyragym! Masha Allah, you love so much your Kyrgyzstan!");
    console.log("Your love score is " + loveScore + "% chyragym!Masha Allah, you love so much your Kyrgyzstan!");
}
if (loveScore > 15 && loveScore <= 55) {
    alert("Your love score is " + loveScore + "% chyragym! Ala Too love you and you love Ala too as well!");
    console.log("Your love score is " + loveScore + "% chyragym! Ala Too love you and you love Ala too as well!");
}
if (loveScore <= 15) {
    alert("Your love score is " + loveScore + "% chyragym! This is JS math random calculating only.");
    console.log("Your love score is " + loveScore + "% chyragym! This is JS math random calculating only.");
}

//j)
// BMI Calculator ------ Advanced (IF/ELSE) ----------

// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     var interpretation = "";
//     if (bmi < 18.5) {
//         interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//     }
//     if (bmi >= 18.5 && bmi <= 24.9) {
//         interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//     }
//     if (bmi > 24.9) {
//         interpretation = "Your BMI is " + bmi + ", so you are overweight.";
//     }
//     return interpretation;
// }

// bmiCalculator(64, 1.75);