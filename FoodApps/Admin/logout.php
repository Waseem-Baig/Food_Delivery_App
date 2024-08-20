<?php
    session_start();
    if(!isset($_SESSION['username'])){
        header("Location: http://localhost/FoodApps/Admin/");
    }else{
        session_unset();
        session_destroy();
        header("Location: http://localhost/FoodApps/Admin/");
    }
?>