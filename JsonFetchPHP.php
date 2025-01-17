<?php
include "config.php"; // Database configuration file
include "auth.php"; // Authentication file

header('Content-Type: application/json'); // Set response type to JSON

// SQL query to fetch all records
$sqlfetch = "SELECT * FROM USER ORDER BY USERID DESC";
$result = mysqli_query($conn, $sqlfetch);

if (!$result) {
    echo json_encode(["error" => "Query failed: " . mysqli_error($conn)]);
    exit;
}

$data = [];

// Fetch all records into an associative array
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Encode the data as JSON and output it
echo json_encode($data);
?>
