const form = document.querySelector('form')
const btnCadastrar = document.getElementById('cadastrar')


const newUser = {
    nome: 'testuser',
    sobrenome: 'testpassword',
    cpf: 'testcpf',
    rg: 'testrg',
    email: 'testemail',
    senha: 'testsenha'
};

function setCookie(name, value, days) {
    const expires = days ? `expires=${new Date(Date.now() + days * 864e5).toUTCString()}` : '';
    document.cookie = `${name}=${value};${expires};path=/`;
    console.log(document.cookie)
}

function saveUser(user) {
    const userData = JSON.stringify(user);
    setCookie('userData', userData, 30); // Cookie expira em 30 dias
}

form.addEventListener('submit', event => {
    event.preventDefault();

    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const cpf = document.getElementById('cpf').value
    const rg = document.getElementById('rg').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value


    auxUser = [nome, sobrenome, cpf, rg, email]
    console.log(auxUser)
    saveUser(auxUser)

    auxUser = auxUser.join()
    console.log(auxUser)
    user.push(auxUser)
    console.log(user)

    const userToJson = [{
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        rg: rg,
        email: email
    }
    ]
    const jsonData = JSON.stringify(userToJson)
    console.log(jsonData)

    const objData = JSON.parse(jsonData)
    console.log(objData)
})


function guardarDados() {
}

function validarCpf(cpf){
    let validacao = false

    const cpf = document.getElementById('cpf').value
    let tamanhoCpf = cpf.length; 
    if (tamanhoCpf == 11){
        
    } else{
        validacao= true
    }
    return validacao;
}
function validarRg(rg){
    let validacao = false

    const rg = document.getElementById('rg').value
    let tamanhoRg = rg.length; 
    if (tamanhoRg == 10){
        
    } else{
        validacao= true
    }
    return validacao;
}
function validarSenha(senha){
    let validacao = false

    const senha = document.getElementById('password').value
    let tamanhoSenha = senha.length; 
    if (tamanhoSenha > 8){
        validacao = true
    } else{
        validacao = false
    }
    return validacao;
}
function validarEmail(){
    let validacao = false
    const email = document.getElementById('email').value
    if (email.includes("@")=true){
        validacao = true
    }
    else if(email.includes(".com")=true){
        validacao=true
    }
    else if(email.indexof("@")-1 != " "){
        validacao = true
    } return validacao;
}
function validarNome(){
    let validacao=false
    const nome= document.getElementById('nome').value
    numeros = [0,1,2,3,4,5,6,7,8,9]
    if (nome.includes(numeros)=false){
        validacao=true
    }
    return validacao;
}

function validarSobrenome(){
    let validacao=false
    const sobrenome= document.getElementById('sobrenome').value
    numeros = [0,1,2,3,4,5,6,7,8,9]
    if (sobrenome.includes(numeros)=false){
        validacao=true
    }
    return validacao
}
