<?php
require_once('cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$idusuario = $postjson['idusuario'];

$query = $pdo->query("DELETE FROM usuarios WHERE idUsuario = '$idusuario'");

$result = json_encode(array('erro' => 0, 'mensagem' => 'Cadastro Excluído com Sucesso.'));
echo $result;

?>