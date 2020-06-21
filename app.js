
//chapter 21-25
// // Task 1
// var firstName=prompt("Enter first name")
// var lasttName=prompt("Enter last name")
// var fullName=firstName+" "+lasttName
// document.write("Welcome "+fullName)

// Tast 2
// var fav=prompt("Enter Fav mobile model")
// document.write("My fav moile model is "+fav +" <br>")
// document.write("Length of string "+fav.length)

// Task 3
// var letter="pakistan"
// for(var a=0;a<letter.length;a++){
// if(letter[a]==="n"){
//     document.write("Letter is pakistan <br>")
//     document.write("index of 'n' is "+a)
// }
// }

// Task 4
// var letter="hello world"
// for(var a=letter.length;a>0;a--){
// if(letter[a]==="l"){
//     document.write("Letter is hello world <br>")
//     document.write("index of last 'l' is "+a)
//     break
// }
// }


// task 5
// var letter="pakistan"
// for(var a=0;a<letter.length;a++){
// if(a===3){
//     document.write("Letter is Pakistan <br>")
//     document.write("3 index letter is "+letter[a])
//     break
// }
// }

// // Task 6
// var firstName=prompt("Enter first name")
// var lasttName=prompt("Enter last name")
// var fullName=firstName.concat(" "+lasttName)
// document.write("Welcome "+fullName)

// task 7
// var letter = "hyderabad";
// var rep = letter.replace("hyder", "islam");
// document.write("city "+letter+"<br>")
// document.write("After replace "+rep)

// task 8
// var letter="472" 
// var num=Number(letter)
// document.write("word "+ letter +"<br>")
// document.write("TYpe:  String" +"<br>")
// document.write("word "+ num +"<br>")
// document.write("TYpe:  Number" +"<br>")

// task 9
// var letter=prompt("enter word")
// document.write("convert to uppercase "+letter.toUpperCase())

// task 10
// var num=36.65
// document.write(num+"")

//task 11
// var input=prompt("enter name")
// var input1=input.toLowerCase()
// var arr=["cake", "apple pie", "cookie", "chips", "patties"] 
// for(var a=0; a<=arr.length; a++){
// if(input1===arr[a]){
// document.write(arr[a] +" is avaiable at index "+a+" of our bakery")
// }
// }

// task 12
// var letter=prompt("enter word")
// letterIndex=letter.length
// document.write("last index "+letter[letterIndex-1])






// chapter 26-30
// task 1
// var num=3.45214
// document.write("nummber "+num+"<br>")
// document.write("round off value "+Math.round(num)+"<br>")
// document.write("flore value "+Math.floor(num)+"<br>")
// document.write("ceil value "+Math.ceil(num)+"<br>")

// task 2
// var num=-2.673
// document.write("nummber "+num+"<br>")
// document.write("round off value "+Math.round(num)+"<br>")
// document.write("flore value "+Math.floor(num)+"<br>")
// document.write("ceil value "+Math.ceil(num)+"<br>")

// task 3
// var num=-4
// document.write("nummber "+num+"<br>")
// document.write("Absolute value "+Math.abs(num)+"<br>")

// task 4
// var num=Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 to 100 is: "+num)
 
//task 5
// var num=Number(prompt("enter a number"))
// var match=Math.floor((Math.random() * 10) + 1);
// if(num===match){
// document.write("congratulate you win")
// }else{
//     document.write("Sorry try again")
// }








//chapter 31-34
// task 1
// var d = new Date("2020-06-21")
// document.write(d)

// task 2
// var d = new Date();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert( months[d.getMonth()])

// task 3
// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// alert( days[d.getDay()])

// task 4
// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var da=days[d.getDay()]
// if(da=="Sunday" ||da=="Saturday"){
// alert("Its fun day")
// }








//chapter 35-38
//task 1
// function date(){
//     var d = new Date();
//     document.write(d.toString())
// }
// date()

//task 2
// function greeting(){
// var firstName=prompt("Enter first name")
// var lasttName=prompt("Enter last name")
// var fullName=firstName.concat(" "+lasttName)
// document.write("Welcome "+fullName)
// }
// greeting()

//task 3
// function sumNum(){
// var firstNumber=Number(prompt("Enter first number"))
// var secondNumbere=Number(prompt("Enter second nummber"))
// var sum=firstNumber+secondNumbere
// document.write("Sum is "+sum)
// }sumNum()

//task 4
// function sumNum(num1,num2,operator){
//     if(operator==="+"){
// return (num1+num2)
//     }
//    else if(operator==="-"){
//         return (num1-num2)
//             }
//             else if(operator==="*"){
//                 return (num1*num2)
//                     }
//                     else if(operator==="/"){
//                         return (num1/num2)
//                             }
//                             else if(operator==="%"){
//                                 return (num1%num2)
//                                     }
//                                         }
// document.write("result is "+sumNum(2,2,"+"))


//task 5
// function counter(start, end){
//     for(var a=start; a<=end; a++){
// document.write(a+"<br>")
//     }
// }
// counter(2,8)







