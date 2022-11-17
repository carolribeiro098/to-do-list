x = document.getElementById("close")
btnlogin = document.getElementById("login");
dados = document.getElementById("dados");

function add(){
    const tarefa = document.getElementById('taf');
    const newh3 = document.createElement('h3');
    newh3.innerText = tarefa.value;
    const newBtn = document.createElement('button');
    newBtn.innerText="Excluir";
    
    document.getElementById("tafcadastrada").appendChild(newh3);
    document.getElementById("tafcadastrada").appendChild(newBtn);
    newh3.style.color="white"
    newh3.style.fontSize="3rem"
    
    newh3.addEventListener('click', function(){
        newh3.style.color="red";
    })
    
    newBtn.addEventListener('click', function(){
        newh3.remove();
        newBtn.remove();
    })
    
}

function logar(){
    login = document.getElementById("logi");
    LogEmail = document.getElementById("email");
    LogSenha = document.getElementById("senha");
    confsenha = document.getElementById("confsenha");
    nome = document.getElementById("nome");
    
    if(login.value.length<10 && nome.value.length>10 && senha.value==confsenha.value && LogEmail.value.includes("@")){
        document.getElementById("login").style.display="none"
    }
    else{
        alert("Preencha corretamente os campos. Tente novamente!")
    }

    var dados =document.getElementById("center2");
    const mostrarNome = document.createElement("h3");
    const mostrarLog = document.createElement("h3");
    const mostrarEmail = document.createElement("h3");
    const mostrarSenha = document.createElement("h3");
    mostrarNome.innerText= "Nome: "+ nome.value;
    mostrarLog.innerText = "Login: "+ login.value
    mostrarEmail.innerText = "Email: "+ LogEmail.value;
    mostrarSenha.innerText = "Senha:" +LogSenha.value;
    
    dados.appendChild(mostrarNome);
    dados.appendChild(mostrarLog);
    dados.appendChild(mostrarEmail);
    dados.appendChild(mostrarSenha);

}

function mostrarDados(){
    a = document.getElementById("dadosCad");
    a.style.display="flex";
}

x.addEventListener('click', function(){
    a.style.display="none";
})