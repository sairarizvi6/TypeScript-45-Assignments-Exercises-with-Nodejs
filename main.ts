// Q1...Install [Node.js], [TypeScript] and [VS Code] on your computer.
//All Programs and software have been installed...


//Q2...Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
//would you like to learn some Python today?”

let personame = "Hello Eric";
console.log(personame,"would you like to learn some Python today?");

//Q3****Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

let personname = "hoor fatima";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personname.replace (/\b\w/g, (char) => char.toUpperCase()));

//Q4****Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”


let quote: string= "A person who never made a mistake never tried anything new.";
let author: string= "Albert Einstein"
console.log(` ${author} once said, "${quote}"`);

//Q5.****Famous Quote 2: Repeat Exercise 4, but this time store the famous 
//person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.

let famous_person : string = "Quaid e Azam";
let message : string = 'Once Said,"There is no power on earth that can undo Pakistan."';
console.log(famous_person,message);

//Q6***6. Stripping Names: Store a person’s name, 
//and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, 
//"\t" and "\n", at least once. Print the name once,
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let whitespce : string = "\n\t Hoor Fatima \t\n"
console.log(whitespce);
let withoutwhitespace : string = whitespce.trim();
console.log(withoutwhitespace);

//Q7**** Number Eight: Write addition, subtraction, multiplication,
// and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results. 

console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);                 

//Q8****You should create four lines that look like this:
//console.log(5 + 3)

console.log(4 + 4);
console.log(10 -2);
console.log(4 * 2);
console.log(16 / 2);

//Q9*****Favorite Number: Store your favorite number in a variable. 
//Then, using that variable, create a message that reveals your favorite number. Print that message.


let favouriteNumber = 5;
console.log("My favourite Number is" , favouriteNumber);

// Q10**** Adding Comments: Choose two of the programs you’ve written, 
//and add at least one comment to each. If you don’t have anything specific to write because your programs 
//are too simple at this point, just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.

//my name is SAIRA
//Dated : 06/09/1985

console.log('hello world simple program');


//date :4-March-24
let whitespace = "\n\t Minahil Khan\t\n";
console.log(whitespace);
let withoutwhitespace = whitespace.trim();
console.log(withoutwhitespace);

// Q11***Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.

let Names : string [] = ["Minahil","Hoor","sadaf","Samana"];
console.log(Names[0])
console.log(Names[1])
console.log(Names[2])
console.log(Names[3])

// Q12***Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each messageshould be the same, but each message should be personalized with the person’s name.

let names : string [] = ["Minahil","Hoor","sadaf","Samana"];
let message = "They are my best friends"
console.log("hellow" , names[0],message)
console.log("hellow" , names[1],message)
console.log("hellow" , names[2],message)
console.log("hellow" , names[3],message)

//Q13******Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”

let transportation : string [] = ["civic" , "bike", "bus" , "sozuki"];
transportation.map((items) => console.log(`I would like to own a ${items}`));

//Q14******Guest List: If you could invite anyone, 
//living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let guestArr = ["Sarim","Mudassir","Wajih"]
guestArr.map((items) => (console.log(`Daer ${items} , you are invited to the dinner`)));

//Q15******Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//•****Start with your program from Exercise 14.
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
//•***Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
//you are inviting.
//****Print a second set of invitation messages, one for each person who is still in your list.

let guestArr: string [] = ["Samana","Hamsa","Adeel","Hamza"];
let canNotAttend : string = "Adeel"

console.log(canNotAttend + "can not attend the dinner.");

let newGuest : string = "Humna"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner.`) )

//Q16***More Guests: You just found a bigger dinner table, so now more space isavailable. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.

let guestList = ["Hamsa","Mudassir","Samana","Hoor"];
let dontCome = guestList[0];

console.log(dontCome, "Hamsa can not come");

guestList.splice(0, 1, "Adeel");
// Message Print for Bigger Table 
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Print Meaasge of Updated List
console.log("Updated Lits of our Guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));


// Adding a new guest at starting index of array
guestList.unshift("Sarim");

// Adding a new guest at ending index of array
guestList.push("Rumana");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Wajih");

//Q***17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
//***Start with your program from Exercise 16. 
//Add a new line that prints a message saying that you can invite only two people for dinner.
//**Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//**Print a message to each of the two people still on your list, letting them know they’re still invited.
//**Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.


let guestList = ["Hamsa","Mudassir","Samana","Hoor"];
let dontCome = guestList[0];

console.log(dontCome, "Hamsa can not come");

guestList.splice(0, 1, "Adeel");
// Message Print for Bigger Table 
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Print Meaasge of Updated List
console.log("Updated Lits of our Guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));
 
//Inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

// Using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}

console.log("invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);

// Adding a new guest at starting index of array
guestList.unshift("Sarim");

// Adding a new guest at ending index of array
guestList.push("Rumana");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Wajih");


//***Q18***Seeing the World: Think of at least five places in the world you’d like to visit.
//---Store the locations in a array. Make sure the array is not in alphabetical order.
//---Print your array in its original order.
//---Print your array in alphabetical order without modifying the actual list.
//---Show that your array is still in its original order by printing it.
//---Print your array in reverse alphabetical order without changing the order of the original list.
//---Show that your array is still in its original order by printing it again.
//---Reverse the order of your list. Print the array to show that its
//--order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.


// Making a Array of Countries and Prints itS original order
let countriesToVisit: string[] = ["Switzerland" , "Canada" , "London", "Iraq"] ;
console.log("Original order:" , countriesToVisit);

// Print a Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical order:" , [...countriesToVisit].sort());

// Show that the Array is still in its original order
console.log("Still in original order:" , countriesToVisit);

//Print a Array in Reversed order without modifying the Actual Array List
console.log("Reverse order:" , [...countriesToVisit].reverse());

// Show that the Array is still in its original order
console.log("Still in original order:" , countriesToVisit);

// We have changed the original Array order now
console.log("Original Array Reversed:",countriesToVisit.reverse());

// Print the Array to show that it's back to its original order
console.log("Back to Original order:", countriesToVisit.reverse());

// Print the Array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical order:" , countriesToVisit.sort());

// We have changed again the original Array order now in reverse order again
console.log("Original Array Reversed Again:",countriesToVisit.reverse());

//Q***19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.

let guestList: string[] = ["Sarim","Mudassir","Wajih"];

guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, Would you like to dinner with me?`));

let lengthGuests: number = guestList.length;

console.log(`We are inviting total ${lengthGuests} guests.`);


//Q***20****Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages,
 //or anything else you’d like. Write a program that creates a list containing these items.


 //Making a programming Language Array
let programmingLanguage: string[] = ["TypeScript" , "JavaScript", "python" , "PHP"];

// Print the message of List
console.log("List of programming Language:");

// Print the values of Array in the form of List
programmingLanguage.forEach(language => console.log(language));

console.log(programmingLanguage);

//Q****21**They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

interface itCourse {

    courseName: string;
    location: string
    onSitestudents: number;
}

let itCourse = {
     courseName : "TypeScript and JavaScript",
     location : "Governor House Sindh",
     onSitestudents: 50000
};

console.log(itCourse);

//Q**22****Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen. Change an index in one of your programsto produce an index error. 
//Make sure you correct the error before closing the program.

//Creating a Array
let errorArray: string[] = ["A" , "B" , "C", "D"];

// Producing Error ! by Accessing invalid index of array
//console.log(errorArray[10]);

// Error removed
console.log(errorArray[1]);

//****Q**23**Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction for the results of each test. 
//Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// Making a varibles
let five = 5;

let ten = 10;

// Test 1***
console.log("Test 1: Five is equal to 5?");
console.log(five == 5);

// Test 2****
console.log("\nTest 2: ten is equal to 10?");
console.log(ten == 10);

// Test 3****
console.log("\nTest 3: 5 is not Equal to 10");
console.log(five != ten);

// Test 4*****
console.log("\nTest 4: 10 is greater than 5");
console.log(ten > 5);

// Test ***5
console.log("\nTest 5: 5 is smaller than 10");
console.log(five < ten);

// Test ***6
console.log("\nTest 6: 10 is smaller than 5");
console.log(ten < 5);

// Test***7
console.log("\nTest 7: 5 is equal to 10");
console.log(five == 10);

// Test****8
console.log("\nTset 8: 10 is not equal to 10");
console.log(ten != ten);

// Test****9
console.log("\nTest 9: 5 is greater than 10");
console.log(100 < 50);

// Test*****10
console.log("\nTest 10: 100 is smaller than 50");
console.log(100 < 50);

//Q***24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
//Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
//Test whether an item is in a array
//Test whether an item is not in a array

// Define variables
let apple = "apple";
let uppercaseApple = "Apple";
let ten = 10;
let twenty = 20;

// Test for equality and inequality with stringS

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Tests using lowercase Function
console.log("\nIs Apple is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs Apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

// Notb equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

// Logical operators (True)
console.log("Is twenty && age < 30?.");
console.log(30 > 10 || 20  < 25);

console.log("Is age > 30 || age < 18?.");
console.log(twenty <= 30 || ten <= 18);

// In Array
console.log("Is five in number?");
console.log(twenty <= 20);

// Not in Array
console.log("Is ten not in number?");
console.log(five => 5);

//***Q*25**Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)

// Define Variable
let alienColor = "Purple";

if (alienColor === "Purple"){

//Code Block
console.log("Alien color is Green player just earned 5 points.");
}

if (alienColor === "white"){
console.log("Alien color is white");
}

//***Q26**Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
 //and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.

// Define Variable
let alienColor = "Green";

// First Version
if(alienColor === "Green"){
console.log("player just earned 5 points for shooting the alien.")
}
else {
console.log("player just earned 10 points.");
}

// Second Version
if (alienColor === "Blue"){
console.log("I am come from If statement.");
}
else {
console.log("I am come from Else statement.");
}

//***Q***27***Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.


// Define Variables
let alienColor = "green";

// Using If & Else-If statements
if(alienColor === "green"){
    console.log("(version 1) you shot down green alien you have earned 5 points");
}
else if(alienColor === "yellow"){
    console.log("you shot down yellow alien you have earned 10 points");
}
else if(alienColor === "red"){
    console.log("you shot sown red alien you have earned 15 points");
}

// Version 2
let alienColor2 = "yellow";

if(alienColor2 === "green"){
    console.log("you shot down green alien you have earned 5 points");
}
else if(alienColor2 === "yellow"){
    console.log("(version 2) you shot down yellow alien you have earned 10 points");
}
else if(alienColor === "red"){
    console.log("you shot sown red alien you have earned 15 points");
}    
// Version 3
let alienColor3 = "red";

if(alienColor3 === "green"){
  console.log("you shot down green alien you have earned 5 points");
}
else if(alienColor3 === "yellow"){
  console.log("you shot down yellow alien you have earned 10 points");
}
else if(alienColor3 === "red"){
  console.log("(version 3) you shot sown red alien you have earned 15 points");

}

//Q****28****Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//If the person is age 65 or older, print a message that the person is an elder.

// Creating a Variable
let age = 2;

// Creating a programme for Determining the stage of life using If-Else Chain
if (age < 2){
    console.log("You are a Baby.");
}
else if (age >= 2 && age < 4){
    console.log("You are a Toddler.");
}
else if (age >= 4 && age <13){
    console.log("You are a Kid.");
}
else if (age >= 13 && age <20){
    console.log("You are a Teenager.");
}
else if (age >= 20 && age <65){
    console.log("You are an Adult.");
}
else if (age >= 65){
    console.log("You are an Elder.");
}

//Q****29*****Favorite Fruit: Make a array of your favorite fruits, 
//and then write a series of independent if statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.
//Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!

// Creating a Array
let favorite_fruits = ["Mango" , "Orange" , "Melon"]

// Using 5 Independent If Statements
if (favorite_fruits.includes("Mango")){
    console.log("I Really Like Mangoes");
}
if (favorite_fruits.includes("Orange")){
    console.log("I Really Like Oranges");
}
if (favorite_fruits.includes("Apple")){
    console.log("I Really Like Apples");
}

if (favorite_fruits.includes("Melon")){
    console.log("I Really Like Melon");
}
if (favorite_fruits.includes("Banana")){
    console.log("I Really Like Bananas");
}

//Q***30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// Creating a Array
let userNames = ["Ali","Hamzah", "Hina","Admin" ,"Ayesha"];

// Using ForEach Loop on Array

userNames.forEach(oneUser =>{
if(oneUser === "Admin"){
      console.log(`Hello ${oneUser}, would you like to see a status report?`)
   }else{
  console.log(`Hello ${oneUser}, thank you for logging in again.`) 
  }
})

//Q***31* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames = ["Ali", "Hamzah", "Hina", "Admin", "Ayesha"];
userNames = []

if(userNames.length === 0){
console.log("Your Array in Empty we need to find some users!")
}else{
    // Using ForEach Loop on Array
}
userNames.forEach(oneUser =>{
  if(oneUser === "Admin"){
  console.log(`Hello ${oneUser}, would you like to see a status report?`)
   }else{
    console.log(`Hello ${oneUser}, thank you for logging in again.`) 
  }
})

//***Q.32****Checking Usernames: Do the following to create a program that simulates 
//how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used.
//If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Array of Current Users
let current_users = ["Usama" , "Alishba" , "Noureen" , "Maryam" , "Wajih"]

// Array of New Users
let new_users = ["Askari" , "Maryam" , "Mehreen" , "Wajih" , "Hira"]

//Loop through new_users to check for usernames availibility
new_users.forEach(new_one_user => {

    // Making a condition for username already exists and save in our_condition variable 
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
  
  // Print Different messages using If-Else Statement
    if(our_condition){
console.log(`Sorry ${new_one_user} is already taken!`)

  }else{
    console.log(`This username ${new_one_user} is available`)
  }
})

//Q****33****Ordinal Numbers: Ordinal numbers indicate their position in a array,
// such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
//Loop through the array.
//Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
//7th 8th 9th", and each result should be on a separate line.

// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using For-Loop
for(let oneNumber of numbers){
    let OrdinalEnding: string;

    if(oneNumber === 1){
        OrdinalEnding = "st"
    }
else if(oneNumber === 2){
    OrdinalEnding = "nd"
}
else if(oneNumber === 3){
    OrdinalEnding = "rd"
}
else{
OrdinalEnding = "th"
}

console.log(`${oneNumber}${OrdinalEnding}`);

}

//Q***34****Pizzas:Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza
//instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that state that how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza 
//you like and then an additional sentence, such as I really love pizza!


// Creating a Array
let pizza = ["Chicken Tikka" , "Malai Cheese" , "Fajita"]

// Using For-Loop
for (let onePizza of pizza){
    console.log(`I like ${onePizza} pizza`);
}

// Print a Message outside of the for-loop
console.log("Pizza is my love")
console.log("I eat Pizza")

//Q**35**Animals:Think of at least three different animals that have a common characteristic.
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//Modify your program to print a statement about each animal, 
//such as A dog would make a great pet.
//Add a line at the end of your program stating what these animals have in common.
//You could print a sentence such as Any of these animals would make a great pet!

// Creating a Array
let petAnimals = ["Cat","Dog","Rabbit"]

// Using For-Loop
for (let onePet of petAnimals){
    console.log(`A ${onePet} would make a great pet.`)
   
}
 // Print a message outside of For-Loop
 console.log("Any of these aimals would make a great pet!\n")

 //***36***T-Shirt: Write a function called make_shirt() that accepts a size 
//and the text of a message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it.
//Call the function.

function make_shirt (size: string, printMessage: string){
  console.log(`You selected ${size} size shirt with ${printMessage} prints on shirt`)
}

make_shirt("Medium", "CodewithSaira")

make_shirt("Small", "Saira")


//Q**37***Large Shirts: Modify the make_shirt() function so that shirts are large
//by default with a message that reads I love TypeScript. Make a large shirt and a
//medium shirt with the default message, and a shirt of any size with a different message.

// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function with by default values
make_shirt();

// Calling a function now with Medium size and default message
make_shirt("Medium")

// Calling a function now with small size and Different Print Message
make_shirt("Small", "I Love JavaScript")

//***Q38***Cities:Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan.
//Give the parameter for the country a default value.
//Call your function for three different cities, at least one of which is not in the default country.

// Describe a Function 
function describe_city(city: string, country: string = "Pakistan"){
    console.log(` ${city} is in ${country}`);
    }
    
    // Calling the function
    describe_city("Karachi");
    
    describe_city("Lahore");
    
    describe_city("Berlin", "Germany");
    
    //***Q***39**City Names:Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
    //"Lahore, Pakistan"
    //Call your function with at least three city-country pairs, and print the value that’s returned.
    
    // Creating a function with parameters which return a values in string
    function city_country(city: string, country: string) : string{
        return `${city} , ${country}`;
    }
    
    // Calling a function and print the returned value
    console.log(city_country("Karachi", "Pakistan"));
    
    console.log(city_country("Tokyo", "Japan"));
    
    console.log(city_country("Berlin", "Germany"));
    
   //Q40****Album:Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, 
//and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing differentalbums. 
//Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.


// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
      artist: artist_name,
      title: album_title,   
    };
    
    if (tracks !== undefined){
    album.tracks = tracks;
    }
    return album;
    }
    
    // Calling three functions and creating three variables with different values
    
    let album1 = make_album("Ali", "Album title 1");
    
    let album2 = make_album("Fatima", "Album title 2");
    
    // Calling a make_album function with third parameter
    let album3 = make_album("Ahmed", "Album title 3" , 10);
    
    // Print values of our Object created my function
    
    console.log(album1);
    console.log(album2);
    console.log(album3);

    //***Q***41.Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array. 

// Define a Function to print each magician name from an Array

function show_magicians(Magicians: string[]){
    Magicians.forEach(name => console.log(name));
}

// Define an Array containing magicians name
let magician_names = ["Saim" , "Waseem" , "Mohsin"]

// Call the function to print each magician name
show_magicians(magician_names)

//***Q42.Great Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians 
//by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.

// Define the function to show magicians names
function show_magicians(Magicians: string[]){
    Magicians.forEach(name => console.log(name));
}
// Function to make magicians great through.map & it will modify Array
function make_great(magicians: string[]){
  return magicians.map(name => `The Great ${name}`);
}

// Define an Array of magicians names
let magician_names = ["Sarim" , "Hussain" , "Haider"];

// Call make_great function to modify magicians names
let great_magicians =  make_great(magician_names);

// Call show_magicians that showed modified list of magicians
show_magicians(great_magicians);

//****Q**43.Unchanged Magicians: Start with your work from Exercise 42. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original
//names and one array with the Great added to each magician’s name.

// Define the function to show magicians names
function show_magicians(Magicians: string[]){
    Magicians.forEach(name => console.log(name));
}
// Function to make magicians great through.map & it will modify Array
function make_great(magicians: string[]){
  return magicians.map(name => `The Great ${name}`);
}

// Define an Array of magicians names
let magician_names = ["Sarim" , "Hussain" , "Haider"];

// Making a copy of origional Array through.slice() function
let copy_magician_names = magician_names.slice();

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// Show both Arrays original and copied

// Original
console.log("original Array\n")
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);

//***Q44****Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number
//of arguments each time.

function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("Now Enjoy Sandwich")
}

// Call the function three timeS with three diffrent number of argumentS
makeSandwich("Chicken" , "Cheese" , "Mayo", "Egg");

makeSandwich("Bread" , "Butter");

makeSandwich("Chicken" , "Cheese" , "Mayo", "Egg" , "Tomato", "Lettuce" , "Capsicum", "Chillies");

//***Q*45***Cars: Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name.
 //It should then accept an arbitrary number of keyword arguments.
 //Call the function with the required information and two other name-value pairs, 
 //such as acolor or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

// Define a function to create a car object with optional options....
function create_Car(manufacturer, model,  ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model:model
    };
    
    // Add Additional options to the car object
    options.forEach(Option => {
        let [Key, value] = Option.split(":");
        car[Key.trim()] = value.trim();
    });
    
    return car;
    }
    
    // Call the function to create a car object
    let my_car = create_Car("Toyota" , "Corrolla", "color: Black","sunroof: True","Year: 2024");
    
    // Print the varible to ensure all the information is stored correctly in the car object
    console.log(my_car);






