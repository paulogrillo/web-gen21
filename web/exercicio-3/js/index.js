

let nome = document.querySelector('#nome')

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
       txtNome.innerHTML = 'nome invalido'
       txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'nome valido'
    }
}