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
function selectOct(obj) {
	div = obj;
	obj.id = "seleccionado";
	var numero = $(obj).attr('data-next');
	console.log($(obj).html());
	$('[data-cuar='+numero+']').html($(obj).html());
}

function selectCuar(obj) {
	div = obj;
	obj.id = "seleccionado";
	var numero = $(obj).attr('data-next');
	console.log($(obj).html());
	$('[data-semi='+numero+']').html($(obj).html());
}


function selectSemiI(obj) {
	div = obj;
	if (obj.id == 'semiI1'){
		var numero = $(obj).attr('data-next');
		$('[data-final='+numero+']').html($(obj).html());
		var numero = $("#semiI2").attr('data-next');	
		$('[data-tercero='+numero+']').html($("#semiI2").html());
	}	
	else {
		var numero = $(obj).attr('data-next');
		$('[data-final='+numero+']').html($(obj).html());
		var numero = $("#semiI1").attr('data-next');	
		$('[data-tercero='+numero+']').html($("#semiI1").html());
	}	
}


function selectSemiD(obj) {
	div = obj;
	if (obj.id == 'semiD1'){
		var numero = $(obj).attr('data-next');
		$('[data-final='+numero+']').html($(obj).html());
		var numero = $("#semiD2").attr('data-next');	
		$('[data-tercero='+numero+']').html($("#semiD2").html());
	}	
	else {
		var numero = $(obj).attr('data-next');
		$('[data-final='+numero+']').html($(obj).html());
		var numero = $("#semiD1").attr('data-next');	
		$('[data-tercero='+numero+']').html($("#semiD1").html());
	}	
}


function selectFinal(obj) {
	var numero = $(obj).attr('data-next');
	console.log($(obj).html());
	$('[data-campeon='+numero+']').html($(obj).html());
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
