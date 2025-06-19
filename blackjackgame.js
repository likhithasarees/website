let firstCard= 7;
let secondCard = 7
let cards = [firstCard,secondCard]
let hasBlackJack = false
let isAlive = true

let message= ""
let message_holder= document.getElementById("message_holder")
let sum_holder= document.getElementById("sum_holder")
// let sum_holder =document.querySelector("#sum_holder")
let cards_holder = document.getElementById("cards_holder")

let sum= firstCard+secondCard

function startgame(){
    loadGame()
}

function loadGame(){

    if (sum<=20){
   // window.prompt("Not yet brother ! Spin up another deck")
   message="Not yet brother ! Spin up another deck 😐"
} else if(sum===21){
   // window.prompt(" Mamma mia ! You did it brother . You got the blacjack")
   hasBlackJack = true
   isAlive=false
   message="Mamma mia ! You did it brother.\n You got the Blackjack!! Hurray!🎉😅😄"
} else if (sum>21){
    // window.prompt(" You are done and dusted bro :) You are out of luck and game. See you in the next game !")
    isAlive=false
    message="You are done and dusted bro :)\n You are out of luck and game 😔.\n Don't worry 🙂, See you in the next game !😥"
    }


// console.log(message);
// window.alert(message);

message_holder.style.color="black";
message_holder.textContent= message

sum_holder.textContent="Sum:"+" "+ sum
cards_holder.textContent="Cards: "
for(let count=0; count<cards.length;count++){
    cards_holder.textContent+=cards[count]+" "
}

}

function newcard(){
   console.log("Drawing a new card from the deck!")
   alert("Drawing a new card from the deck!")
   
   let newcard= 7;
   cards.push(newcard)
   console.log(cards)
   alert(cards)
   sum+=newcard;

   loadGame();


}


//CASH OUT

console.log("Blackjack Information :")

if(hasBlackJack===false){
    console.log(" He doesn't have a BlackJack")
} else if (hasBlackJack=== true){
    console.log(" He has a blackjack ")
} else {
    console.log(" Somethimg fishy here , let me get back")
}

//Live check 

console.log("Is game alive?")

if (isAlive=== true){
    console.log (" Yes!")
} else {
    console.log(" NO")
}