//Assignment 2

//Q1 
var a = 13;
var b = 9;
var c = a+b;
alert ("Sum of "+a+" and "+b+" is "+c+"")


//Q2 
var a = 13;
var b = 9;
var d = a-b;
var e = a*b;
var f = a/b;
var g = a%b;
alert ("Result of subtracting "+b+" from "+a+" is "+d+"")
alert ("Result of multiplying "+a+" and "+b+" is "+e+"")
alert ("Result of dividing "+a+" by "+b+" is "+f+"")
alert ("Remainder of dividing"+a+" by "+b+" is "+g+"")


//Q3
var value 
alert ("Value after variable declaration is: "+value+"")
value=3
alert ("Initial value: "+value+"")
value++
alert ("Show the value after the increment: "+value+"")
 value = value+7
alert ("Value after addition is: "+value+"")
value--
alert ("Show the value after the decrement: "+value+"")
var remainder = 11% value;
alert ("The remainder is : "+remainder+"")



//Q4
var ticketPrice=600;
var qty = 5
var result = ticketPrice*qty
alert ("Total cost to buy 5 tickets to a movie is "+result+" PKR")

//Q5
var table=5;
alert (table +" x 1 ="+ table*1)
alert (table +" x 2 ="+ table*2)
alert (table +" x 3 ="+ table*3)
alert (table +" x 4 ="+ table*4)
alert (table +" x 5 ="+ table*5)
alert (table +" x 6 ="+ table*6)
alert (table +" x 7 ="+ table*7)
alert (table +" x 8 ="+ table*8)
alert (table +" x 9 ="+ table*9)
alert (table +" x 10 ="+ table*10)

//Q6
var celsius = 29;
var fahrenheit = (celsius * 9/5)+32
alert (fahrenheit)
alert (celsius+' C is ' +fahrenheit+ ' F ')
var fahrenheit = 84.2
var celsius = (fahrenheit-32) * 5/9
alert (fahrenheit+' F is ' +celsius+ ' C ')

//Q7
var priceItem1=560
var priceItem2= 200
var qtyItem1= 2
var qtyItem2= 5
var shipCharge= 150
var finalItem1=2*560
var finalItem2=5*200
var final = finalItem1 + finalItem2 + shipCharge
alert ("Total cost of final is "+final+" PKR")

//Q8
var totalMarks =900; var marksObtain =1200; var percentage = totalMarks/marksObtain*100
alert ('Total marks: ' +totalMarks)
alert ('Marks Obtained: ' +marksObtain)
alert ('Percentage: ' +percentage+'%')

//Q9
var US$ = 10*104; var saudiRiyals= 25*28; var totalPkr = US$+saudiRiyals
alert ("Total currency in PKR: " +totalPkr)

//Q10
var arithmetic = 10+5*10/2
alert (arithmetic)

//Q11
var currentYear=2015; var birthYear =1992;
var finalYear = currentYear-birthYear; var finalsYear = currentYear-birthYear;
++finalYear
alert ('They are either ' +finalsYear+ ' or ' +finalYear)

//Q12
var radius = 12;
var pi = 3.142
var circumference =2*pi*radius
var circle = pi*radius*radius
alert ("Radius of a circle: " +radius)
alert ("The Circumference is: " +circumference)
alert ("The area is: " +circle)

//Q13
var a = 10;
++a
alert ("The value of ++a is: " +a)
alert ("Now the value of a is: " +a)
alert ("The value of ++a is: " +a)
++a
alert ("Now the value of a is: " +a)
--a
alert ("The value of --a is: " +a)
alert ("Now the value of a is: " +a)
alert ("The value of a-- is: " +a)
a--
alert ("Now the value of a is: " +a)

//Q14
var b = 2;
var c = 1;
var result = --b - --c + ++c + c--
alert (result)

//Q15
var product = "Chips"
var currentAge =43
var maxAge = 75
var estimatedAmount =2
var remainingYear=maxAge-currentAge
var estimateYear =remainingYear*estimatedAmount
var required =estimateYear*365
alert ("Favorite snacks "+product)
alert ("Current age "+currentAge)
alert ("Estimated Maximum Age " + maxAge)
alert ("Amount of snack per day " +estimatedAmount)
alert ("You will need "+required+" "+product+ " to last you un till the ripe old age of " +maxAge)
