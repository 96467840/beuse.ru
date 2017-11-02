<?php

	Header("Access-Control-Allow-Origin: *");
	Header("Access-Control-Allow-Credentials: true");
	Header("Access-Control-Allow-Headers: X-Requested-With,Cache-Control,Content-Type"); //,accept,HTTP_X_REQUESTED_WITH, withCredentials
	Header("Access-Control-Allow-Methods:POST,GET,OPTIONS");
	Header("Content-Type:javascript/json; charset=UTF-8");

	if (rand(1,100)>50) 
	{
		echo '{"server error":"Тест ошибки. Поробуйте еще раз."}';
	}
	else
	{
		echo '{"success":true}';
	}