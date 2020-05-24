<?php
$result = Warehouse::get();
foreach($result as $key => $obj) {
    $result[$key]["id"] = intval($result[$key]["id"]);
    $result[$key]["cep"] = floatval($result[$key]["cep"]);
}

header('Content-Type: application/json');
echo json_encode($result);