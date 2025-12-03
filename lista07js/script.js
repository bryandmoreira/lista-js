
document.addEventListener('DOMContentLoaded', () => {
    
    const inputNumero = document.getElementById('numero');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultado');

    
    calcularBtn.addEventListener('click', () => {
      
        const numeroBase = parseInt(inputNumero.value);

       
        if (isNaN(numeroBase)) {
            resultadoDiv.innerHTML = '<p class="erro">Por favor, insira um número válido.</p>';
            return;
        }

     
        let htmlTabuada = '<h2>Resultado da Tabuada de Soma para ' + numeroBase + '</h2><ul>';
        
      
        for (let i = 0; i <= 10; i++) {
            const resultado = numeroBase + i;
            
           
            htmlTabuada += '<li>' + numeroBase + ' + ' + i + ' = <strong>' + resultado + '</strong></li>';
        }

        htmlTabuada += '</ul>';

       
        resultadoDiv.innerHTML = htmlTabuada;
    });
});