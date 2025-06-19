//Loop-Array-DOM challenge
 let sentence = ["Hello","my","name","is","Ajay"]
 let greeting_holder= document.getElementById("greeting")
 //render the sentence in  gretting paragrah - usinf for and .textcontext
 //approach 1 -> using new variable
 let fullSentence =""
 for(let count=0;count<sentence.length;count++){
    fullSentence+=sentence[count]+" "
 }
// greeting_holder.textContent=fullSentence
//approach 2 -> directly looping over DOM element
for( let count=0;count<sentence.length;count++){
    greeting_holder.textContent+=sentence[count]+" "
}


/*
//Loop -array challenge
//create for loop -to log all cards in array using cards.length

let cards = [5,9,11,4,3]
//START FINISH STEP SIZE
for(let count=0;count<cards.length;count+=1){ //count++ also woeks 
    console.log(cards[count])
}

let randomSongs=["Brindavana mali","Sasivadane","Shankara nada","Sirilu poge","maa telugu talli","Ye shakuni adani","Uppengene godavari"]
// START FINISH STEP size

for(let count=0;count<randomSongs.length;count+=1){ //count++ also woeks 
    console.log(randomSongs[count])
}



//Loop Challnge
//Create a loop to count from 10 to 100 in steps of 10
// START   FINISH(condition)     STEP SIZE
for(let count=10;count<=20; count++){  // count++ also works
    console.log(count)
}


let randomSongs=["Brindavana mali","Sasivadane","Shankara nada","Sirilu poge","maa telugu talli","Ye shakuni adani","Uppengene godavari"]
console.log("Songs list :")
console.log(randomSongs)
let leaderSong= "Idi mana BHaratam"
randomSongs.push(leaderSong)
console.log(" New list after adding song:")
console.log(randomSongs)
console.log("last song added :")
// console.log(randomSongs[randomSongs.lastIndexOf]) -->  wont work undefined 
//console.log(randomsongs[-1])  --> won't work in JS, will work in Java


console.log(randomSongs[randomSongs.length-1]) // works fine, too lengthy code
console.log(randomSongs.at(randomSongs.length-1)) // perfect readable

console.log(" Song list before pop( removing last element) :")
console.log(randomSongs)
console.log("last element :"+ randomSongs[randomSongs.length-1])
randomSongs.pop()
console.log(" Song list before pop( removing last element) :")
console.log(randomSongs)
console.log("last element :"+ randomSongs.at(randomSongs.length-1));





let cards= [3,4,7]
console.log(cards)
cards.push(11)
console.log(cards)


// Arrays

 let blogposts= ["One which gives life takes life","One which takes life also gives life", "Life begins at Ocean", "Life is dyed by color of your thoughts"]
 console.log(blogposts)

 let randomSongs=["Brindavana mali","Sasivadane","Shankara nada","Sirilu poge","maa telugu talli","Ye shakuni adani","Uppengene godavari"]
 console.log(randomSongs[3])

 // array -complex types
 // array to describe yourse;f
 
 let myInfo = ["Ajay","31", true]







let myPoints=3

console.log(myPoints)

function add3points(){
    myPoints+=3
    console.log(myPoints)
}

function remove1point(){
    myPoints-=1
    console.log(myPoints)
}

add3points(); add3points(); 
remove1point(); remove1point();remove1point();
add3points();
remove1point();











// practice challenge-2
let person_name = "Linda"
let greeting = "Hi there"

function console_greeter(){
    console.log(greeting+", "+person_name+ "!")
}
*/
