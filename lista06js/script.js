function conv(){
         var nome = document.getElementById("nome").value
     var idade = parseFloat(document.getElementById("idade").value)
    var resposta = document.getElementById("resp")

    resposta.textContent = "Seu nome é "  + nome + " e possuí "+ idade +" de idade"
   
}