 //                         JAVA SCRIPT

 //                          Chapter#21-25

 //1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var a=prompt('Enter your first name');
// var b=prompt('Enter your last name');
// var c=a + b;
// document.write('Hello, ' + c);


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var a=prompt('Enter your favorite mobile phone model');

// document.write('My favorite mobile phone model is: ' + a);
// document.write('<br/> Length of string is: ' + a.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var a="Pakistani"
// var wordIndex = a.indexOf('n')
// console.log('String:' + a)
// console.log('Index of "n":' + wordIndex)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var a='Hello World';
// var lastWordIndex = a.lastIndexOf('l');

// console.log('String: '+a);
// console.log("Last index of 'l':" +lastWordIndex);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var a='Pakistani'
// var b=a.charAt(3)
//  console.log('String:'+a)
//  console.log('Character at 3rd index:'+b)

// 6. Repeat Q1 using string concat() method.

// var a=prompt('Enter your first name');
// var b=prompt('Enter your last name');
// var c=a.concat(b);
// document.write('Hello, ' + c);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var a='Hyderabad'
// var newWord = a.replace('Hyder','Islam')
// console.log(newWord)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = 'Ali and Sami are best friends. They play cricket and football together';

// var newWord = message.replace(/and/g,'&');
// console.log(newWord)


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var a=472;
// var b=a.toString();

// console.log('Value:'+a)
// console.log('Type:'+ typeof a)
// console.log('Value:'+a)
// console.log('Type:' + typeof b)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var a=prompt('Enter in small letters')

// var b=a.toUpperCase()
// console.log('User inpur:'+a)
// console.log('Upper case:'+b)

// 11. Write a program that takes user input. Convert and
// show the input in title case.


// var a = prompt('enter your name')
// console.log('User input:'+a)
// console.log('Title case:'+a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase())


// 12. Write a program that converts the variable num to
// string.
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var str= num.toString();
// console.log("Number:" + num)
//  console.log('Result:'+str.slice(0,2) + str.slice(3))


// 14. You have an array

// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var usr=prompt('Welcome to bakery,what do you want to order sir/maam')
//  var a=usr.toLowerCase()
//  var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
//  if (a== arr[0]){
//      document.write('cake is available at index 0 in our bakery')
//  }

// else if (a== arr[1]){
//     document.write('apple pie is available at index 1 in our bakery')
// }
// else if (a== arr[2]){
//     document.write('cookie is available at index 2 in our bakery')
// }else if (a== arr[3]){
//     document.write('chips is available at index 3 in our bakery')
// }else if (a== arr[4]){
//     document.write('patties is available at index 4 in our bakery')
// }
//  else {
//      document.write('we are sorry'+usr+'is not available at our bakery')
//  }

// 17. Write a program to display the last character of a user
// input.
// var a=prompt()
// document.write('user input:'+a)
// document.write('Last character:'+a.slice(-1))

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var a='The quick brown fox jumps over the lazy dog';
// var b=a.toLowerCase();
// var count=0;
// for(i=0; i<a.length;i++){
//     if (b.slice(i,i+3)=='the'){
//         count++
//     }
// }
// console.log(count)

//             Chapter#26-30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a=prompt('Enter positive number');

// console.log('number:'+a)
// console.log('round off:'+ Math.round(a))
// console.log('floor value:'+Math.floor(a))
// console.log('ceil value:'+Math.ceil(a))

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a=prompt('Enter negative number');

// console.log('number:'+a)
// console.log('round off:'+ Math.round(a))
// console.log('floor value:'+Math.floor(a))
// console.log('ceil value:'+Math.ceil(a))

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var a=prompt();
// console.log('absolute value of'+a+'is'+Math.abs(a))

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// console.log('Random dice value:'+diceRoll)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var diceRoll =Math.ceil(Math.random()*2);
// console.log(diceRoll)
// if (diceRoll==2){
// console.log(' random coin value:Heads')
// }

// else if(diceRoll==1){
//     console.log(' random coin value:Tails')
// }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// console.log('Random number between 1 to 100:'+ Math.ceil(Math.random()*100));


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var a=prompt('Enter your weight')
// var b=a.replace('kgs','')
// console.log('The weight of user is:'+b+'kilogram')

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var a=Math.ceil(Math.random()*10);
// var b=prompt('enter a number between 1 to 10');
// if (b==a){
//     console.log('Congratulations')
// }
// else{
//     console.log('Try again')
// }



//           CHAPTER#31-34

// 1. Write a program that displays current date and time in
// your browser.

// var a=new Date();
// console.log(a)

// 2. Write a program that alerts the current month in words.
// For example December.

// var a=new Date(), b=a.getMonth();
//  var arr=['jan','feb','mar','apr','may','june','july','august','sep','oct','nov','dec']
// console.log('Current month:'+ arr[b])

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var a=new Date(), b=a.getDay();
//  var arr=['sun','mon','tue','Wed','thu','fri','sat']
// console.log('Today is '+ arr[b])

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var a=new Date(), b=a.getDay();
//  var arr=['sun','mon','tue','Wed','thu','fri','sat']
// if ( arr[b]== 'sat' || arr[b]== 'sun' ){
//     console.log('Its Fun Day')
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var a=new Date(),b=a.getDate();
// if (b<16){
//     console.log('First fifteen days of the month')
// }
// else{
//     console.log('Last days of the month')
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var a=new Date(),b=a.getTime();

// console.log('Current date: '+ a)
// console.log('Elapsed milliseconds since january 1,1970; '+b)
// console.log('Elapsed minutes since january 1,1970; '+b/(1000 * 60 ))

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var a=new Date(),b=a.getHours();
// if (b<13) {
//     alert('its AM')
// } else{
//     alert('its PM')
// }


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate=new Date('Dec 31,2020')
// console.log(laterDate)

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var a=new Date();
// var b=a.getTime()/(1000 * 60*60*24);
// var c=new Date('June 18,2015'), d=c.getTime()/(1000 * 60*60*24),fnf=b-d;

// alert(fnf.toFixed(0) +' days passed since 1st Ramadan,2015')


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var a=new Date();
// var b=a.getTime()/(1000);
// var c=new Date('Dec 5,2015'), d=c.getTime()/(1000 ),fnf=b-d;

// alert('On reference date'+c+fnf.toFixed(0)+' seconds had passed since beginning of 2015')


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var a=new Date();
// var b=new Date() ;
// var c=a.getHours()
// b.setHours(c-1)

// console.log('Current date:'+a)
// console.log('1 hour ago,it was '+ b)

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var a=new Date();
// var b=new Date() ;
// var c=a.getFullYear()
// b.setFullYear(c-100)

// alert('Current date:'+a+', 100 years back,it was '+ b)

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var a=prompt('Enter your age')
// var b=new Date(), b1=b.getFullYear(), c=b1-a ;

// console.log('Your age is: '+a)
// console.log('Your birth year is: '+ c )

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:

// var usrName=prompt('Enter your name'),month=prompt('Bill month')

// document.write('Customer Name:'+usrName+'<br> Bill Month:'+month+'<br> Number of units:410'+'<br> Charges per unit:16'+'<br> Net amount payable(within Due Date):'+ (410*16)+'<br> Late payment charges:350'+'<br> Gross amount Payable(after due date):'+(410*16+350))



//             CHAPTER#35-38

// 1. Write a function that displays current date & time in your
// browser.
 
// function a(){
//     var a=new Date()
//     document.write(a)
// }
// a()


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function a(){
//     var usr1=prompt('Enter your 1st name')
//     var usr2=prompt('Enter your 2nd name')
//     document.write(usr1 +' '+ usr2+', welcome')
// }
// a()


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function cal(){
//     var num1=+prompt('enter 1st num')
//     var operator=prompt('enter operator')
//     var num2=+prompt('enter 2nd num')
//     if(operator=='+'){
//         var a=num1+num2
//         document.write(a)
//     }
//      else if(operator=='-'){
//         var b=num1-num2
//         document.write(b)
//     }
//     else if(operator=='*'){
//         var c=num1*num2
//         document.write(c)
//     }
//     else if(operator=='/'){
//         var d=num1/num2
//         document.write(d)
//     }
// }
// cal()

// 5. Write a function that squares its argument.
// function sqr(){
// var a=prompt('Enter any number'), b=a*a;
// document.write(b)
// }
// sqr()


// 6. Write a function that computes factorial of a number.

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function a(){
//     var a1=prompt('enter 1st number')
//     var a2=prompt('enter 2nd number')
//     for(i=a1;i<=a2;i++){
//         document.write(i)
//     }
// }
// a()


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// // Hypotenuse2 = Base2 + Perpendicular2

// function a(){
// var a1=+prompt('base')
// var a2=+prompt('perp')
// b=(a1*a1)+(a2*a2)

// document.write(Math.sqrt(b))
// }
// a()

// 9. Write a function that calculates the area of a rectangle.
// A = width * height

// function rec(){
//     var height=6;
//     width=4
//     document.write(height*width)
// }
// rec()

