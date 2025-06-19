let result_box= document.getElementById("result")
let result_marker= "Result :"


function getNumbers(){

        let number1 = document.getElementById("number1").value;
let number2 = document.getElementById("number2").value;
//alert(number1)



let number1_int= parseFloat(number1)||0
let number2_int= parseFloat(number2)||0

//alert(number1_int)

return [number1_int,number2_int]


}




function add(){

let  numbers = getNumbers()

    let resultNumber= numbers[0]+ numbers[1]
    let result= result_marker+" "+resultNumber
result_box.textContent=result
}

function subtract(){

let  numbers = getNumbers()

    let resultNumber= numbers[0]- numbers[1]
    let result= result_marker+" "+resultNumber
result_box.textContent=result
}

function multiply(){

let  numbers = getNumbers()

    let resultNumber= numbers[0] * numbers[1]
    let result= result_marker+" "+resultNumber
result_box.textContent=result
}

function divide(){

let  numbers = getNumbers()

    let resultNumber= numbers[0]/numbers[1]
    let result= result_marker+" "+resultNumber
result_box.textContent=result
}




