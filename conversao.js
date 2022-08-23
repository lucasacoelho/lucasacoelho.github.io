function calculo() {
    var tipo = document.getElementById("tipo").value;
    var altura = document.getElementById("altura").value;
    var type = document.getElementById("type").value;
    var peso = document.getElementById("peso").value;
    let resultado_pes = document.getElementById("resultado_pes");
    let resultado_alt = document.getElementById("resultado_alt");
    if (altura == '' && peso == '') {
        resultado_alt.innerHTML =("Preencha os valores!")
    }else{  
        if (tipo === "cm") {
            var resp = altura / 30.48
            resultado_alt.innerHTML = (`a sua altura é ${resp.toFixed(1)} ft`)
            resultado_pes.innerHTML = ('')
            if (type === "kilograms") {
                var resp = peso * 2.205
                resultado_pes.innerHTML = (` e o seu peso é ${resp.toFixed(3)} lbs`)
            }else{
                var resp = peso / 2.205
                resultado_pes.innerHTML = (`e o seu peso é ${resp.toFixed(1)} Kg`)
            }
        }else{
            var resp = altura * 32.512
            resultado_alt.innerHTML = (`a sua altura é ${resp.toFixed(1)} cm`)
            if (type === "kilograms") {
                var resp = peso * 2.205
                resultado_pes.innerHTML = (`e o seu peso é ${resp.toFixed(3)} lbs`)
            }else{
                var resp = peso / 2.205
                resultado_pes.innerHTML = (`e o seu peso é ${resp.toFixed(1)} Kg`)
            }
        }
    }
}
function transformar(){
    var tipo = document.getElementById("tipo_grau1").value;
    var celsius = document.getElementById("celsius").value;
    var faren = document.getElementById("faren").value;
    var kelvin = 273.15;
    var type = document.getElementById("tipo_grau2").value;
    var valor = document.getElementById("valor").value;
    var result = document.getElementById("resultado_temp")
    if (valor == "") {
        result.innerHTML =("Preencha os valores!")
    }else{
    if (tipo === "°C" && type === "°C"){
        result.innerHTML = (`${valor} °C`)
    }if (tipo === "°F" && type === "°F"){
        result.innerHTML = (`${valor} °F`)
    }if (tipo === "K" && type ==="K"){
        result.innerHTML = (`${valor} K`)
    } 
    if (tipo === "°C" && type === "°F") {
        let resp = ((valor * 9)/5 + 32)
        result.innerHTML = (`${valor} °C é igual a ${resp.toFixed(2)} °F`)
    } if (tipo === "°C" && type === "K") {
        let value = parseFloat(valor)
        let resp = (value + 273.15)
        result.innerHTML = (`${valor} °C é igual a ${resp.toFixed(3)} K`)
    }if (tipo === "°F" && type === "°C") {
        let resp = (((valor - 32)*5)/9)
        result.innerHTML = (`${valor} °F é igual a ${resp.toFixed(0)} °C`)
    }if (tipo === "°F" && type === "K") {
        let resp = (((valor - 32)*5)/9 + 274.15)
        result.innerHTML = (`${valor} °F é igual a ${resp.toFixed(3)} K`)
    }if (tipo === "K" && type === "°C") {
        let resp = (valor - 273.15)
        result.innerHTML = (`${valor} K é igual a ${resp.toFixed(0)} °C`)
    }if (tipo === "K" && type === "°F") {
        let resp = (((valor - 273.15) * 9)/5 + 32)
        result.innerHTML = (`${valor} K é igual a ${resp.toFixed(2)} °F`)
    }
    }   
}
