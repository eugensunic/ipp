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
select flag_doc as first_col, count(id) as amount from doctors
          group by flag_doc ");


$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'first_col' => $col_1,
        'amount' => (string) $col_2 
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>








