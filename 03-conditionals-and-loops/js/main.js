// The if Statemente 01-08
var myNum1 = 7;
var myNum2 = 10;

if (myNum1 < myNum2){
    alert("Javascript is easy to learn.\nJavascript é fácil de aprender.")
}

// The if else Statement 02-08
if (myNum1 > myNum2){
    alert("This is my first condition.\nEssa é minha primeira opção.");
}
else {
    alert("This is my second condition.\nEssa é minha segunda opção.")
}

//The if else if Statement 03-08
var course = 3
if (course == 1){
    console.log("1");
} else if (course == 2){
    console.log("2");
} else {
    console.log("3");
}

var status = 1;
var msg;
if (status == 1){
    msg = "Online";
} else if (status == 2){
    msg = "Away";
} else {
    msg = "Offline";
}
console.log(msg)

// The switch Statement 04-08
var day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend")
}

var color = "yellow";
switch(color){
    case "blue":
        console.log("This is blue.");
        break;
    case "red":
        console.log("This is red.");
        break;
    case "orange":
        console.log("This is orange.");
        break;
    case "green":
        console.log("This is green.");
        break;
    default:
        console.log("Color not found.");
}

// The For Loop 05-08
// for (statement 1; statement 2; statement 3){
    // code block to be executed
// }
for (i=1; i<=5; i++) {
    console.log(i);
}

var other_for = 1;
    for (; other_for<=5; other_for++) {
        console.log(other_for);
    }

for (more_other_for=1, text=""; more_other_for<=5; more_other_for++){
    text = more_other_for;
    console.log(more_other_for);
}

// The While Loop 06-08
// while (condition){
//     code block
// }

var frutas = 5;
while(frutas <= 10){
    console.log("Temos " + frutas + " frutas agora");
    frutas++;
}

// The Do While Loop 07-08
// do {
//     code block
// }
// while(condition);

var do_while = 20;
do {
    console.log("Do While Loop: " + do_while);
    do_while++;
}
while(do_while<=25);

// Break and Continue 08-08
for(i=0; i<=10; i++){
    if (i==5){
        break;
    }
    console.log("Contagem <5: " + i);
}

for(c=3; c<=7;c++){
    if (c==5){
        continue;
    }
    console.log("Bora continuar após ignorar o 5 --> " + c);
}

// Module 3 Quiz

// 1)
var x = 0;
while (x < 6) {
    x++
}
console.log(x);

// 2)
day_of_week = 7;
switch(day_of_week){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Working Days");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
}

// 3)
z = 7;
do {
    console.log(z)
    z++;
}
while(z<10);