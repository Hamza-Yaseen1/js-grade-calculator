let marks = prompt("Enter the number of Marks:");
let per = marks/100 *100;
if (marks >= 90 && marks <= 100) {
    document.write("<h2>Grade A+</h2>" , "Percentage :" +per+"%");
}
else if(marks >=70 && marks<=89 ) {
    document.write("<h2>Grade A</h2>" , "Percentage :" +per+"%");
}
else if(marks >=60 && marks<=69 ) {
    document.write("<h2>Grade C</h2>" , "Percentage :" +per+"%");
}
else if(marks >=50 && marks<= 59) {
    document.write("<h2>Grade D</h2>" , "Percentage :" +per+"%");
}
else if(marks >=0 && marks<=49 ) {
    document.write("<h2>Fail</h2>" , "Percentage :" +per+"%");
}
else {
    document.write("Invalid Input");
}