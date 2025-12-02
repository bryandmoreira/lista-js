function conv(){

     var celsius = parseFloat(document.getElementById("celsius").value)
     var resp = document.getElementById("resp")

     resp.textContent = (celsius * 1.8) + 32
}