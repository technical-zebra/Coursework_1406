<html>
<body>

Welcome <?php echo $_POST["fullname"]; ?> , Thank you for the Newsletter Signup<br>
Your email address is: <?php echo $_POST["email"]; ?><br>
Your product interest is: 
<?php foreach($_POST['productInterests'] as $selected){
    echo '  ' . $selected; 
}?><br>
Your birthday is: 
<?php $birthdaydate = $_POST["birthdaydate"]; 
$birthdaydate = substr($birthdaydate,5);
echo $birthdaydate;
?><br>

</body>
</html>