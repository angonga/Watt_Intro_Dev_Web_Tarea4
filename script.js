function toggleSection() {
    var demo = document.getElementById("demo");
    if (demo.style.display === "none"){
        demo.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar texto";

    } else {
        demo.style.display = "none";
        document.getElementById("toggleBloque").textConten = "Mostrar texto";

    }
}
function add(){
	return document.getElementById("myVar1").value+document.getElementById("myVar2").value;
}
function subtract(){
	return document.getElementById("myVar1").value-document.getElementById("myVar2").value;
}
function multiply(){
	return document.getElementById("myVar1").value*document.getElementById("myVar2").value;
}

function voidValidation(result,operation){
    if(!isNaN(result)){
        imprimirMensaje(result,operation);
    } else {
        document.getElementById('result').textContent = "Debe ingresar valores numericos"
    }
}


