let rollno=103;
let name="Jiya";
let teachername="Aisha";
let standard="10th";
let Englishmarks=parseInt(prompt("Enter English's marks out of 100:"));
let Urdumarks=parseInt(prompt("Enter Englishmarks out of 100:"));;
let Mathsmarks=parseInt(prompt("Enter Urdumarks  out of 100:"));;
let Chemistrymarks=parseInt(prompt("Enter Mathsmarks out of 100:"));;
let Physicmarks=parseInt(prompt("Enter Physicmarks out of 100:"));;
let total= Englishmarks+Urdumarks+Mathsmarks+Chemistrymarks+Physicmarks; 
let per= total/500 *100;
let grade;
if(per<=100 && per>=89)
{grade="A+";}
else if(per<=90 && per>=80)
{grade="A";}
else if(per<=80 && per>=70)
{grade="B";}
else if(per<=70 && per>=60)
{grade="C";}
else if(per<=60 && per>=50)
{grade="D";}
else {(grade="U");}
document.write("<center> Rollno:",rollno,"<br>");
document.write("Name:",name,"<br>");
document.write("Teachername:",teachername,"<br>");
document.write("Standard:",standard,"<br>");
document.write("<table border=8>");
document.write("<tr><th>Subjects</th><th>Marks Obtained</th><th>Out of</th></tr>");
document.write("<tr><td>English</td><td>",Englishmarks,"</td><td>100</td></tr>");
document.write("<tr><td>Urdu</td><td>",Urdumarks,"</td><td>100</td></tr>");
document.write("<tr><td>Maths</td><td>",Mathsmarks,"</td><td>100</td></tr>");
document.write("<tr><td>Chemistry</td><td>",Chemistrymarks,"</td><td>100</td></tr>");
document.write("<tr><td>Physic</td><td>",Physicmarks,"</td><td>100</td></tr>");
document.write("<tr><td>Total</td><td>",total,"</td><td>500</td></tr>");
document.write("<tr><td>Percentage</td><td>",per,"</td><td></td></tr>");
document.write("<tr><td>Grade</td><td>",grade,"</td><td>100</td></tr>");
