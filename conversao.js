function calculo() {
    var tipo = document.getElementById("tipo").value;
    var altura = document.getElementById("altura").value;
    var cm = document.getElementById("cm").value;
    var feets = document.getElementById("feets").value;
    var type = document.getElementById("type").value;
    var peso = document.getElementById("peso").value;
    var kg = document.getElementById("kg");
    var pounds = document.getElementById("pounds");
    let resultado_pes = document.getElementById("resultado_pes");
    let resultado_alt = document.getElementById("resultado_alt");
    let resultado = document.getElementById("result");
    if (tipo === "cm") {
        //resultado.innerHTML = 
        var resp = altura / 30.48
        resultado_alt.innerHTML = (`a sua altura é ${resp.toFixed(1)} ft`)
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