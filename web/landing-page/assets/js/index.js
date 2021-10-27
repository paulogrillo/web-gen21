let fname = window.document.getElementById('fname')
let lname = document.querySelector('#lname')
let description = document.querySelector('description')

//Global insert
fname.style.color = '#363636'

//Primeiro nome
fname.style.width = '100%'
fname.style.height = '5%'

//Ultimo nome nome
lname.style.width = '100%'
lname.style.height = '5%'

//Ultimo nome nome
description.style.width = '100%'
description.style.height = '5%'

//Function insert
function fnameValidation(){
    let textFname = document.querySelector('#textFname')
    if(fname.value.length < 3){
        textFname.innerHTML = 'Inválido ❌' 
        textFname.style.color = 'red'
    }else{
        textFname.innerHTML = 'Válido ✅'
        textFname.style.color = 'green'
    }
}

function lnameValidation(){
    let textLname = document.querySelector('#textLname')
    if(lname.value.length < 3){
        textLname.innerHTML = 'Inválido ❌'
        textLname.style.color = 'red'
    }else{
        textLname.innerHTML = 'Válido ✅'
        textLname.style.color = 'green'
    }
}

function descriptionValidation(){
    let texDescription = document.querySelector('#texDescription')
    if(description.value.length < 3){
        texDescription.innerHTML = 'Inválido ❌'
        texDescription.style.color = 'red'
    }else{
        texDescription.innerHTML = 'Válido ✅'
        texDescription.style.color = 'green'
    }
}