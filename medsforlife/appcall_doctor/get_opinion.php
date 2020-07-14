<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$servername = "160.153.16.43";
$username   = "eusunic";
$password   = "mili7788";
$dbname     = "ppisforlife";
$json;
$contentArray = array();

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset('utf8');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("
SELECT id, assoc_username, doctors_tought, url, flag_doc, docalone 
FROM doctors
WHERE flag_doc= ?
ORDER BY id ASC");


$stmt->bind_param("s", $one);

// params
$one = $_GET['param_0'];

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5, $col_6);
while ($stmt->fetch()) {
    $json = array(
        'id' => $col_1,
        'assoc_username' => $col_2,
        'doctors_tought' => $col_3,
        'url' => $col_4,
        'flag_doc' => $col_5,
        'docalone' => $col_6
  
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>
