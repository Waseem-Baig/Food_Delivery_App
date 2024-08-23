<?php 
include "config.php";
include "auth.php";
    if(isset($_POST['login'])){
            # making connection with DB
            $username=mysqli_real_escape_string($conn,$_POST['username']);
            $password=(mysqli_real_escape_string($conn,sha1($_POST['password'])));
            # Writing the query to fetch data
            $sql="SELECT USERID,USERNAME,ROLE FROM USER WHERE USERNAME='{$username}' AND PASSWORD='{$password}'";
            $result=mysqli_query($conn,$sql) or die("Unable to process request at moment");
            if(mysqli_num_rows($result)>0){
              while($row=mysqli_fetch_assoc($result)){
                session_start();
                $_SESSION['userid']=$row['USERID'];
                $_SESSION['username']=$row['USERNAME'];
                header("Location: http://localhost/FoodApps/Admin/users.php");  
              }
              
            }
                mysqli_close($conn);
          }else{
            echo '<script>alert("Wrong username or Password!");</script>';
            header("Location: http://localhost/FoodApps/Admin/");
            header("Location: http://localhost/FoodApps/Admin/users.php");
          }
?>