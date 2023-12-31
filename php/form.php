<?php

$a=$_POST['a1'];
$e=12.50;
$t=0;
    if (1 <= $a && $a <= 9)
   {
    $t=$e*$a;
    }
    elseif(10 <= $a && $a <= 19){
        $t1=0;
         $t1=$e*$a;
        $t=$t1-($t1*0.05);
    }
    elseif(20 <= $a && $a <= 49){
        $t1=0;
         $t1=$e*$a;
        $t=$t1-($t1*0.1);

    }
    else {
        $t1=0;
         $t1=$e*$a;
        $t=$t1-($t1*0.15);
    }

//home delivery
$h_d=$_POST['r'];
if($h_d=='yes'){
    $t=$t+40;
}
else{
    $t=$t;
}

//tip
$tip=$_POST['a2'];
$t=$t+$tip;

//city
$l_d=$_POST['city'];
if($l_d=='Dhaka'){
    $t=$t+($t*.2);
}
else{
    $t=$t+($t*.1);
}
$co=0;
$op1=$_POST['quantity1'];
if($op1=='p'){
$co=$co+1;
echo "$op1";
echo "<br>";
}
$op2=$_POST['quantity2'];
if($op2=='q'){
    $co=$co+1;
    echo "$op2";
    echo "<br>";
    }
$op3=$_POST['quantity3'];
if($op3=='r'){
    $co=$co+1;
    echo "$op3";
    echo "<br>";
    }
echo "$co";
echo "<br>";
echo "$t";
?>