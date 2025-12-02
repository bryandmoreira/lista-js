function trans(){

     var nota = parseFloat(document.getElementById("nota").value)
     var resp = document.getElementById("resp")


     if(nota < 60){
        resp.textContent = nota + " REPROVADO"
     }else{
        resp.textContent = nota + " APROVADO"
     }
}