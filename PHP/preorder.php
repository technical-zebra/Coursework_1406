<html>
<body>

Welcome <?php echo $_POST["fullname"]; ?> , Thank you for the Preorder Signup<br>
Your email address is: <?php echo $_POST["email"]; ?><br>
Your ordered product is: 
<?php foreach($_POST['productselect'] as $selected){
    echo '  ' . $selected; 
}?><br>
Your collection date is: 
<?php $collectdate = $_POST["collectdate"]; 
$collectdate = substr($collectdate,5);
echo $collectdate;
?><br>
Your quanity is: <?php echo $_POST["quanity"]; ?><br>
</body>
</html>