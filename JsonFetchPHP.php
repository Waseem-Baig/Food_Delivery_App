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
/*
Formate:
[
    {
        "USERID": "19",
        "NAME": "hgfhhhhh",
        "ADDRESS": "gffffffffffffffffffffffffffffffffnbvvvvvvvvvv",
        "USERNAME": "gfffffffffffffffffff",
        "EMAIL": "bvvvvvvvvvvvvvvvvvvvvvvvv",
        "PASSWORD": "5b0678ad16dae41f171d05af84128a92836d0550",
        "ROLE": "1"
    },
    {
        "USERID": "16",
        "NAME": "fggggggggggggggggggggg",
        "ADDRESS": "ggggggggggggggggggggggggggggggggggggggggggggg@",
        "USERNAME": "gggggggggggggggggggg",
        "EMAIL": "fdfdfdfdfdfdfdfdfdfdfdfdf",
        "PASSWORD": "b71d88ce65e3de8ade14fd8cc68ea18b3c5ed83b",
        "ROLE": "1"
    },
    {
        "USERID": "15",
        "NAME": "Janu",
        "ADDRESS": "fd",
        "USERNAME": "JanuBaje",
        "EMAIL": "jbaje@hdd.in",
        "PASSWORD": "f8d83cf24c1dabe724fb277b91a9426706739c42",
        "ROLE": "1"
    },
    {
        "USERID": "14",
        "NAME": "ytyt",
        "ADDRESS": "ytuyi",
        "USERNAME": "dfncc",
        "EMAIL": "dfdflkgh@in.oi",
        "PASSWORD": "fghrtvcb",
        "ROLE": "1"
    },
    {
        "USERID": "13",
        "NAME": "sfd",
        "ADDRESS": "fdssfdsfd",
        "USERNAME": "fdssfdsfddsfvcb",
        "EMAIL": "vcbcvbcvb@df.in",
        "PASSWORD": "fgdfgdfgdfg",
        "ROLE": "0"
    },
    {
        "USERID": "12",
        "NAME": "FGDDDDDDDDD",
        "ADDRESS": "DDDDDDDDDDDDDDD",
        "USERNAME": "DDDDDDDDDDDDDDDDDDDD",
        "EMAIL": "ggggggggggggggg@fdf.in",
        "PASSWORD": "b1583550d76f0bdb1f16c3b6f39f9d3e1890aeeb",
        "ROLE": "0"
    },
    {
        "USERID": "10",
        "NAME": "Jack",
        "ADDRESS": "707 Willow St",
        "USERNAME": "jack707",
        "EMAIL": "jack@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "1"
    },
    {
        "USERID": "9",
        "NAME": "Ivy",
        "ADDRESS": "606 Cherry St",
        "USERNAME": "ivy606",
        "EMAIL": "ivy@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "1"
    },
    {
        "USERID": "8",
        "NAME": "Hannah",
        "ADDRESS": "505 Walnut St",
        "USERNAME": "hannah505",
        "EMAIL": "hannah@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "1"
    },
    {
        "USERID": "7",
        "NAME": "Grace",
        "ADDRESS": "404 Cedar St",
        "USERNAME": "grace404",
        "EMAIL": "grace@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "1"
    },
    {
        "USERID": "6",
        "NAME": "Frank",
        "ADDRESS": "303 Birch St",
        "USERNAME": "frank303",
        "EMAIL": "frank@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "1"
    },
    {
        "USERID": "5",
        "NAME": "Eva",
        "ADDRESS": "202 Maple St",
        "USERNAME": "eva202",
        "EMAIL": "eva@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "1"
    },
    {
        "USERID": "4",
        "NAME": "David",
        "ADDRESS": "101 Pine St",
        "USERNAME": "david101",
        "EMAIL": "david@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "1"
    },
    {
        "USERID": "3",
        "NAME": "Charlie",
        "ADDRESS": "789 Oak St",
        "USERNAME": "charlie789",
        "EMAIL": "charlie@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "0"
    },
    {
        "USERID": "2",
        "NAME": "Bob",
        "ADDRESS": "456 Elm St",
        "USERNAME": "bob456",
        "EMAIL": "bob@example.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "1"
    },
    {
        "USERID": "1",
        "NAME": "Alice",
        "ADDRESS": "123 Main St",
        "USERNAME": "admin",
        "EMAIL": "admin@deldost.com",
        "PASSWORD": "d033e22ae348aeb5660fc2140aec35850c4da997",
        "ROLE": "0"
    }
]

*/
