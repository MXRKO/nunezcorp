<?php
function correo($de_nombre,$de,$para_nombre,$para,$asunto, $contenido){
	$headers   = array();
	$headers[] = "MIME-Version: 1.0";
	//$headers[] = "Content-type: text/plain; charset=utf-8";
	$headers[] = "Content-type: text/html; charset=iso-8859-1";
	//$headers[] = "Content-type: text/html; charset=multipart/alternative";
	$headers[] = "From: ".$de_nombre." <".$de.">";
	$headers[] = "Reply-To: ".$para_nombre." <".$para_nombre.">";
	//$headers[] = "Subject: ".$asunto;
	$headers[] = "X-Mailer: PHP/".phpversion();
    return @mail($para, $asunto, $contenido, implode("\r\n", $headers));	
}

if($_POST["Accion"]="ENVIAR"){
	$mensaje="El visitante ".$_POST["nombre"]." (".$_POST["correo"].") le ha enviado un mensaje desde la p&aacute;gina, y el mensaje adjunto a continuaci&oacute;n: ".$_POST["mensaje"];
	if(correo("Nuñez Corp","contacto@nunezcorp.com.mx","Formulario de contacto","juannalbaro@gmail.com","Te han enviado un mensaje desde el formulario de Nuñez Corp", $mensaje)){
		echo "ENVIADO";
	}
	else{
		echo "NOENVIADO";
	}
}
?>