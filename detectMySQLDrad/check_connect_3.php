<?php
$servername = "drad.dichvutructuyen.net";
$username = "dradv2_db";
$password = "dradv2@2015!@#";

//connection to the database
$dbhandle = mysql_connect($servername, $username, $password)
  or die("Unable to connect to MySQL");
echo "Connected to MySQL<br>";

$selected = mysql_select_db("dradv2_db",$dbhandle)
  or die("Could not select dradv2_db");

?> 