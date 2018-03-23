<?php
$mongo = new \MongoDB\Driver\Manager('mongodb://localhost:27017/dblp');
$filter = $_POST["filter"];
$options = $_POST["options"];
$query = new MongoDB\Driver\Query($filter, $options);
$rows = $mongo->executeQuery('dblp.publis', $query); // $mongo contains the connection object to MongoDB
foreach($rows as $r){
   print_($r);
}
?>