$(document).ready(function(){
	$("#btEnviar").click(function(){
		if($.trim($("#txtNombre").val())!="" && $.trim($("#txtEmail").val())!="" && $.trim($("#txtMensaje").val())!=""){
			$.ajax({
				url:'mensaje.php',
				type:'POST',
				data:'Accion=ENVIAR&nombre='+$("#txtNombre").val()+"&correo="+$("#txtEmail").val()+"&mensaje="+$("#txtMensaje").val(),
				contentType:'application/x-www-form-urlencoded; charset=UTF-8',
				dataType:'html',
				beforeSend:function(e){
					$("#btEnviar").attr("disabled",true);
				},
				success:function(respuesta){
					if(respuesta=="ENVIADO"){
						$("#txtNombre").val("");
						$("#txtEmail").val("");
						$("#txtMensaje").val("");
						alert("Su mensaje se ha enviado correctamente, nosotros nos pondremos en contacto a la brevedad");
					}
					else{
						alert("Su mensaje no se ha podido enviar, por favor intentelo mas tarde.");	
					}
					$("#btEnviar").removeAttr("disabled");
				},
				error:function(obj,quepaso,otro){
					alert("Ha ocurrido un error, por favor intentelo mas tarde.");
					$("#btEnviar").removeAttr("disabled");
				}
			});
		}
		else{
			alert("Debe completar todos los datos del formulario");
		}
	});

	var domtemp="<div class='cycle-oro'>";
	var j=0;
	var i=0;
	var temp="";
	$(".widget-oro .content table table tbody tr td").each(function(){
		if(j>0){
			//alert("j="+j+", i="+i+", ["+$.trim($(this).text())+"]");	
			if(i==1){
				var sp=$(this).text();
				var cad=sp.split("/",2);
				var sp2=$(this).find("font").text();
				var cad2=sp2.split("-",2);
				temp=temp+"<span>"+$.trim(cad[0]+"/ Gramo -"+cad2[1])+"</span>";
			}
			else if(i==2){
				temp=temp+"<span>Pronostico anual&nbsp;&nbsp;&nbsp;&nbsp;"+$.trim($(this).text())+"</span>";	
			}
			else{
				temp=temp+"<span>Precio del Oro&nbsp;&nbsp;&nbsp;&nbsp;"+$.trim($(this).text())+"</span>";	
			}
			if(i==2){
				domtemp=domtemp+"<div class='item'>"+temp+"</div>";
				temp="";
			}
		}
		if(i==2){
			j++;
			i=0;
		}
		else{
			i++;
		}
	});

	domtemp=domtemp+"</div>";

	$(".widget-oro .content").html(domtemp);

	$('.cycle-oro').cycle({ 
		fx:     'scrollVert', 
		speed:    850,
		timeout: 4500,
		pause: true
	});	
});