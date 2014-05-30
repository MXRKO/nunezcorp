$(document).ready(function(){
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

	$('.slider').cycle({ 
		fx:     'scrollHorz', 
		speed:    650,
		timeout: 5500,
		prev:   '.control-left', 
		next:   '.control-right',
		pause: true
	});

	$('.cycle-oro').cycle({ 
		fx:     'scrollVert', 
		speed:    850,
		timeout: 4500,
		pause: true
	});	
});