<?php
$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

if ($usuario === '' || $pass === '') {
    echo json_encode("Llena todos los cambios");
}
// te 123
else{
    echo json_encode("Correcto!! \nUsuario: ".$usuario."\nPass: ".$pass);
}
