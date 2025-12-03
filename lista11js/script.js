function trans(){
    var homem = parseFloat(document.getElementById("homem").value);
    var mulher = parseFloat(document.getElementById("mulher").value); 
    var resp = document.getElementById("resp");
    var resp2 = document.getElementById("resp2");


    if(homem > 50){
        resp.textContent = "RECEBE DESCONTO"
    }else{
        resp.textContent = "NÃO RECEBE DESCONTO"
    }

    if(mulher > 40){
        resp2.textContent = "RECEBE DESCONTO"
    }else{
        resp2.textContent = "NÃO RECEBE DESCONTO"
    }
}