function mOver(obj) {
    if (obj.id != "seleccionado") {
    	obj.style.backgroundColor = "#6f8bf2";
    }
}

function mOut(obj) {
	if (obj.id != "seleccionado") {
        obj.style.backgroundColor = "#ffffff";
    } 
}

/*
var ganadores = 1;
function myFunction(obj) {
	
	if (ganadores <= 2){
		obj.style.backgroundColor = "#f42242";
    	obj.id = "seleccionado";
    	obj.innerHTML =  ganadores + obj.innerHTML;
    	ganadores += ganadores;
	}
}
 */
