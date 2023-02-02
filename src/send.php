<?php
$name = $_POST['name'];
$tel = $_POST['tel'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urldecode($name);
$tel = urldecode($tel);

$name = trim($name);
$tel = trim($tel);

$message = '';
$message .= 'Имя: ' . $name . PHP_EOL;
$message .= 'Телефон: ' . $tel . PHP_EOL;

$sended = mail(
	"info@hotel-raduga.ru",
	"Заявка на звонок - Радуга",
	$message,
	"From: info@hotel-raduga.ru \r\n"
);

if ($sended) {
	echo "Ожидайте, вам перезвонят";
} else {
	echo "Извините, при отправке формы возникла ошибка";
}
