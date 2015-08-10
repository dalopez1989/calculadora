
var operacion = ' ';
var resultado = ' ';
var num='';

function retornar(operacion){
		num=num+operacion;
		document.getElementById('valores').value=num;
		//alert(operacion);
	}
	function comprobar(operacion){
		num=num+operacion;
		document.getElementById('valores').value=num;
		//alert(num);
	}
	function calcular(){
		resultado=eval(num);
		document.getElementById('valores').value=resultado;
	}
	