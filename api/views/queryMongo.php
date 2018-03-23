<?php
$mongo = new \MongoDB\Driver\Manager('mongodb://root:root@192.168.0.127/db');
$filter = $_POST["filter"];
$options = $_POST["options"];
$query = new MongoDB\Driver\Query($filter, $options);
$rows = $mongo->executeQuery('dblp.publis', $query); // $mongo contains the connection object to MongoDB
foreach($rows as $r){
   print_($r);
}
?>