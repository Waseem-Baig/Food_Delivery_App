<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - VIT Delivery Dost</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 0;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }

        .login-container h1 {
            margin-bottom: 20px;
        }

        .login-container input[type="text"],
        .login-container input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .login-container button {
            width: 100%;
            padding: 10px;
            background-color: #ff9800;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .login-container button:hover {
            background-color: #e68a00;
        }
    </style>
</head>

<body>
    <div class="login-container">
        <h1>Login</h1>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit" name="sub">Login</button>
        </form>
    </div>
    <?php
        if(isset($_POST['sub'])){
            $conn=mysqli_connect("localhost","root","","foodapps") or die("Can't process request at this time");
            $username= mysqli_real_escape_string($conn,$_POST['username']);
            $password = mysqli_real_escape_string($conn, sha1($_POST['username']));
            $sql="SELECT * FROM USER WHERE USERNAME='{$username}' AND PASSWORD='{$password}'";
            $result=mysqli_query($conn,$sql) or die("Invalid query");
            if(mysqli_num_rows($result)>0){
                while($row=mysqli_fetch_assoc($result)){
                    session_start();
                    $_SESSION['userid']=$row['USERID'];
                    $_SESSION['username']=$row['USERNAME'];
                }
            }else{
                echo '<script>alert("Wrong Username or Password!");</script>';
            }
        }
    ?>
</body>

</html>