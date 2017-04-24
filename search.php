<?php

 $host_name  = "db679068494.db.1and1.com";
 $database   = "db679068494";
 $user_name  = "dbo679068494";
 $password   = "willWheaton!1013";


 $connect = mysqli_connect($host_name, $user_name, $password, $database);

$arr = array();
if (!empty($_POST['keywords'])) {
	$keywords = $connect->real_escape_string($_POST['keywords']);
	$sql = "SELECT artist, song FROM nerdyoke WHERE artist LIKE '%".$keywords."%' OR song LIKE '%".$keywords."%'";
	$result = $connect->query($sql) or die($mysqli->error);
	if ($result->num_rows > 0) {
		while ($obj = $result->fetch_object()) {
			$arr[] = array('artist' => $obj->artist, 'song' => $obj->song);
		}
	}
}
echo json_encode($arr);
?>