<?php
    header('Access-Control-Allow-Origin: *');
   /**** Email Integration****/
   $to =  "rahulpaliwal177@gmail.com";
   $subject = "Intech Contact Form Data";
   
    /*** Email Data***/
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subjects = $_POST['subject'];
    $message = $_POST['message'];
    
	$htmlContent = "<div style='height: 7px; background-color: #535353;'></div><div style='background-color:#E8E8E8; margin:0px; padding:55px 20px 40px 20px; font-family:Open Sans, Helvetica, sans-serif; font-size:12px; color:#535353;'><div style='text-align:center; font-size:24px; font-weight:bold; color:#535353;'>Intech Form Data</div><div style='border-radius: 5px 5px 5px 5px; padding:20px; margin-top:45px; background-color:#FFFFFF; font-family:Open Sans, Helvetica, sans-serif; font-size:13px;'>Hi Admin,<br><br>You have recieved a new message from the enquiries from on our website<br><br><strong>Name : </strong>".$name."<br><br><strong>Mobile No : </strong>".$phone."  <br><br><strong>Email Id : </strong>".$email."<br><br><strong>Subject : </strong>".$subjects."<br><br><strong>Message : </strong>".$message."<br><br>Thank you,<br></div></div>";
	
        $headers = "MIME-Version: 1.0" . "\r\n"; // Set content-type header for sending HTML email
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: '.$name.'<'.$email.'>' . "\r\n"; // Additional headers
        if(mail($to, $subject, $htmlContent, $headers)){
            echo "1";
        }else{
            echo "0";
        }

?>

