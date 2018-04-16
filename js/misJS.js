function mOver(obj) {
    if (obj.id != "seleccionado") {
    	obj.style.backgroundColor = "#6f8bf2";
    }
}


function mOverBackground(obj) {
	if (obj.id != "seleccionado") {
		estilo = $(obj).attr('style');
		$(obj).attr('style', estilo + "background-blend-mode: unset; ");
	}	
}

function mOut(obj) {
	if (obj.id != "seleccionado") {
        obj.style.backgroundColor = "#ffffff";
    } 
}

function mOutBackground(obj) {
	if (obj.id != "seleccionado") {
		estilo = $(obj).attr('style');
		$(obj).attr('style', estilo + "background-blend-mode: color-burn; ");
	}
}

var div;
function select(obj) {
	div = obj;
	obj.id = "seleccionado";
	var numero = $(obj).attr('data-next');
	console.log($(obj).html());
	$('[data-cuar='+numero+']').html($(obj).html())
}

function select1(obj) {
	div = obj;
	obj.id = "seleccionado";
	var numero = $(obj).attr('data-next');
	console.log($(obj).html());
	$('[data-semi='+numero+']').html($(obj).html())
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
