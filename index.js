let saree_count= document.getElementById("count_sarees");

let previous_count= document.getElementById("previous_counts");

let error_decrement= document.getElementById("error_decrement")
let error_decrement_msg= "Can't decrease the count. Count is already less than or equal to zero"

let count_text= saree_count.innerText
let count= parseInt(count_text,10)

let welcome=document.getElementById("welcome");
let greeting =" Happy Welcome!";
let owner =" Jayamma";
welcome.innerText= greeting + owner;


function increase_by_one(){
    count+=1
    saree_count.innerText=count
}

function decrease_by_one(){
    if(count<=0){
      //  error_decrement.innerText= error_decrement_msg
        alert(error_decrement_msg)


    }
    else{
    count-=1
    saree_count.innerText=count
    }
}

function save(){
    alert("Sarees Count Saved as : " + saree_count.innerText)
    //adding to previous counts 
    // resetting sarees count

    let count_dash = count+"-";
    previous_count.textContent+=count_dash;
   //reset_sarees_counter
    
}

function save_and_reset(){
    save();
    reset_sarees_counter();
}
function reset_sarees_counter(){
    count=0;
    saree_count.innerText=count;
}