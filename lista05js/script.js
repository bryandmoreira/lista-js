function trans(){

    var peso1 =  parseFloat(document.getElementById("peso1").value)
     var peso2 = parseFloat(document.getElementById("peso2").value)
     var resp = document.getElementById("resp")

     resp.textContent = (peso1 + peso2) / 2
}