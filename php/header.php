<?php

    $headers = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
	
	//en
	$en = strpos($headers,"en");
	
	//fr
	$fr = strpos($headers,"fr");
	
	if($en<$fr){
	echo "fr";}
	else{
    echo "en";}
	
?>