<?php

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Connect DATABASE
require_once 'connect.php';
$mysqli = connectToDatabase();
// Include the PHP API file
require_once 'lab-apis.php';

?>