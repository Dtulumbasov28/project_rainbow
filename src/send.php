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
	"tulumbasov.denis00@mail.ru
	",
	"Заявка на звонок",
	$message,
	"From: admin@raduga.ru \r\n"
);

if ($sended) {
	echo "Ожидайте, вам перезвонят";
} else {
	echo "Извините, при отправке формы возникла ошибка";
}
