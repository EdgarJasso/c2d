<?php
$destinatario = 'edgar@coretek.mx';//destino
$asunto  = 'Contacto C2D Web - noreply';//asunto
$cuerpo .= '
<html> 
<head> 
   <title>Prueba de correo</title> 
</head> 
<body>';

$nombre_completo = $_POST['nombre_completo'];
$nombre_completo = mysql_real_escape_string($nombre_completo);
$correo_cliente = $POST['correo_cliente'];
$correo_cliente = mysql_real_escape_string($correo_cliente);
$company = $_POST['compania'];
$company = mysql_real_escape_string($company);

$contenido = '
<h1>Mensaje de Contacto</h1>
<p>La persona:'.$nombre_completo.' necesita mas informacion</p>
<p>Sus datos son: Compañia - '$company', con el correo: '.$correo_cliente.'</p>';
$cuerpo .= $contenido.'
    </body> 
</html>';

$headers = 'MIME-Version:1.0\r\n';
$headers = 'Content-type:text/html; charset=iso-8859-1\r\n';
$headers = 'From'.$destinatario.'\r\n';
$headers = 'Reply-To:edgar@coretek.com';//correo de respuesta
$headers = 'Return-path:edgar@coretek.mx';//correo de salida
$headers = 'Cc:edgar@coretek.mx';//mensaje de copia
$headers = 'Bcc:edgar@coretek.mx';//mensaje de copia oculta
//mail($destinatario, $asunto, $cuerpo, $headers);
echo 'se envio correo';
?>

