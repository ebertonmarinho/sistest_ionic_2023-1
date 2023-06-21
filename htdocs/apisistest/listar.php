<?php
require_once('cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$start = intVal($postjson['start']);
$limit = intVal($postjson['limit']);

$busca = '%' . $postjson['pesquisa'] . '%';
$query = $pdo->query("SELECT * FROM usuarios WHERE nome LIKE '$busca' or cpf LIKE '$busca'
            order by idUsuario asc limit $start, $limit");

$res = $query->fetchAll(PDO::FETCH_ASSOC);

$total_reg = @count($res);

if($total_reg > 0){
    for($i=0; $i < $total_reg;$i++){
        //foreach($res[$i] as $key => $value){ }
        $dados[] = array(
            'idusuario' => $res[$i]['idUsuario'],
            'nome' => $res[$i]['nome'],
            'cpf' => $res[$i]['cpf'],
            'num_CNH' => $res[$i]['num_CNH'],
            'validade_CNH' => $res[$i]['validade_CNH'],
            'telefone' => $res[$i]['telefone'],
            'email' => $res[$i]['email'],
        );
    }
    $result = json_encode(array('itens' => $dados));
    echo $result;
}else{
    $result = json_encode(array('itens' => 0));
    echo $result;
}

?>