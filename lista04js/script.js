function trans(){
     var valor = parseFloat(document.getElementById("valor").value)
     var Desc = parseFloat(document.getElementById("desc").value)
     var valTOtal = parseFloat(document.getElementById("desc").value)
    var resposta = document.getElementById("resp")

    Desc = valor * 0.10
    valTOtal = valor - Desc

    resposta.textContent = "Foi descontado " + Desc + " e o valor total é " + valTOtal
}