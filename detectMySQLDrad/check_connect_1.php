<?php
$servername = "drad.dichvutructuyen.net";
$username = "dradv2_db";
$password = "dradv2@2015!@#";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?> 