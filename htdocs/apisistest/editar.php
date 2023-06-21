<?php
require_once('cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);

//echo $postjson;

# Variáveis que vão ser utilizadas para pegar as 
# informações do usuário
$idusuario = "";
$nome = "";
$cpf = "";
$num_CNH = "";
$validade_CNH = "";
$telefone = "";
$email = "";

# Algoritmos de validação dos dados
if (isset($postjson['nome']) && $postjson['nome'] != "") {
    $nome = $postjson['nome'];
}else{
    echo json_encode(array('erro'=>1, 'mensagem' => 'Preencha o Campo Nome!'));
    exit();
}

if (isset($postjson['cpf']) && $postjson['cpf'] != "") {
    /*if(is_numeric($postjson['cpf'])){ */
        $cpf = $postjson['cpf'];
    /*}else{
        echo json_encode(array('erro'=>1, 'mensagem' => 'Digite um CPF Válido!'));
        exit();
    } */
}else{
    echo json_encode(array('erro'=>1, 'mensagem' => 'Preencha o Campo CPF!'));
    exit();
}

if (isset($postjson['num_CNH']) && $postjson['num_CNH'] != "") {
    if(is_numeric($postjson['num_CNH'])){
        $num_CNH = $postjson['num_CNH'];
    }else{
        echo json_encode(array('erro'=>1, 'mensagem' => 'Digite um número de CNH Válido!'));
        exit();
    } 
}else{
    echo json_encode(array('erro'=>1, 'mensagem' => 'Preencha o Campo número CNH!'));
    exit();
}

if (isset($postjson['validade_CNH']) && $postjson['validade_CNH'] != "") {
    $validade_CNH = $postjson['validade_CNH'];
}else{
    echo json_encode(array('erro'=>1, 'mensagem' => 'Preencha o validade CNH!'));
    exit();
}

if (isset($postjson['telefone']) && $postjson['telefone'] != "") {
    //if(is_numeric($postjson['telefone'])){
        $telefone = $postjson['telefone'];
    /*}else{
        echo json_encode(array('erro'=>1, 'mensagem' => 'Digite um número de Telefone Válido!'));
        exit();
    } */
}else{
    echo json_encode(array('erro'=>1, 'mensagem' => 'Preencha o Campo número Telefone!'));
    exit();
}

if (isset($postjson['email']) && $postjson['email'] != "") {
    $email = $postjson['email'];
}else{
    echo json_encode(array('erro'=>1, 'mensagem' => 'Preencha o Campo E-mail!'));
    exit();
}

# Preencha o SQL com as informações do banco
$res = $pdo->prepare("UPDATE usuarios SET nome = :nome,
        cpf = :cpf, 
        num_CNH = :num_CNH, 
        validade_CNH = :validade_CNH, 
        telefone = :telefone, 
        email = :email 
        ");

# bind do sql com os dados que serão inseridos no banco
$res->bindValue(":nome", $nome);
$res->bindValue(":cpf", $cpf);
$res->bindValue(":num_CNH", $num_CNH);
$res->bindValue(":validade_CNH", $validade_CNH);
$res->bindValue(":telefone", $telefone);
$res->bindValue(":email", $email);

$res->execute();


$result = json_encode(array('erro' => 0, 'mensagem' => 'Salvo com Sucesso'));
echo $result;

?>