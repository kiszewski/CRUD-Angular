<?php

require_once(dirname(__FILE__, 2) . '/src/utils/config.php');

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);

require_once(realpath(CONTROLLERS_PATH . "{$uri}" . '.php'));