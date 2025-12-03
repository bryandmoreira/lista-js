function trans() {
    var idade1 = parseFloat(document.getElementById("idade1").value);
    var idade2 = parseFloat(document.getElementById("idade2").value); 
    var resp = document.getElementById("resp");

    if(idade1 == idade2){
        resp.textContent = "Ambos tem a mesma idade";
    }else if(idade1 > idade2){
        resp.textContent = "A primeira pessoa é mais velha que a segunda";
    }else{ 
        resp.textContent = "A segunda pessoa é mais velha que a primeira";
    }
}