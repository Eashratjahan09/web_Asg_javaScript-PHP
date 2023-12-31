function karim(){
    alert('hello from function');
}
function rahim(){
    let a =document.getElementById('txn').value;
    a=a*2;
    alert(a);
    
}

function rahimr(){
    let a =document.getElementById('txn1').value;
    a=a*2;
    document.getElementById('lbl').innerText = a;

    
}
function task(){
    let a =parseInt(document.getElementById('k1').value);
    let b =parseInt(document.getElementById('k2').value);

    // parseInt er bodole Number use kora jabe
    let c=a+b;
    document.getElementById('lb').innerText=c;
// disable er kaj:
    // document.getElementById("btnx").disabled = true;
    
//    disable er bodole color red kore dibo:
document.getElementById("btnx").style.backgroundColor='red'

//button take gayeb kore deya lagle
// var button=document.getElementById("btnx");
// button.style.display="none";

    
}


function cal(){

    let a =parseInt(document.getElementById('kp1').value);
    let b =parseInt(document.getElementById('kp2').value);

    // parseInt er bodole Number use kora jabe
    let c=a+b;
    document.getElementById('result').innerText=c;

}
document.getElementById("kp1").addEventListener("input", cal);
document.getElementById("kp2").addEventListener("input", cal);


function calculate(){

    let a =parseInt(document.getElementById('kpt1').value);
    let b =parseInt(document.getElementById('kpt2').value);

    // parseInt er bodole Number use kora jabe
    let c=a+b;
    document.getElementById('result2').innerText=c;

}




function Do(operation){

    let a =parseInt(document.getElementById('um1').value);
    let b =parseInt(document.getElementById('um2').value);
    let c;
    switch (operation) {
        case 'sum':
            c = a + b;
            break;
        case 'sub':
           c = a - b;
            break;
        case 'mul':
            c = a * b;
            break;
        case 'div':
           c = a / b;
            break;
        default:
                alert("Invalid operation");
                return;
    }
    document.getElementById('l').innerText=c;
}

function DD(operator){
    let a =parseInt(document.getElementById('umm1').value);
    let b =parseInt(document.getElementById('umm2').value);
    let c;
    if(operator=="+"){
        c = a + b;
    }
    else if(operator=="-"){
        c = a - b;
    }
    else if(operator=="*"){
        c = a * b;
    }
    else if(operator=="/"){
        c = a / b;
    }
    document.getElementById('lm').innerText=c;

}

function cost(){
    let a=parseInt(document.getElementById('a1').value);
    let e=12.50;
    let t=0;
    if (1 <= a && a <= 9)
   {
    t=e*a;
    }
    else if(10 <= a && a <= 19){
        let t1=0;
         t1=e*a;
        t=t1-(t1*0.05);
    }
    else if(20 <= a && a <= 49){
        let t1=0;
         t1=e*a;
        t=t1-(t1*0.1);

    }
    else {
        let t1=0;
         t1=e*a;
        t=t1-(t1*0.15);
    }
    // let h_d=document.getElementsByName('r').value;
    // if(h_d=='yes'){
    //     t=t+40;
    // }

    let h_d = document.querySelector('input[name="r"]:checked');
    // let h_d = document.getElementsByName('r').value;
    if (h_d && h_d.value === 'yes') {
        t = t + 40;
    }
    else{
        t=t;
    }


    let tip=parseInt(document.getElementById('a2').value);
    t=t+tip;

    // let l_d=document.getElementsByName('city').value;
    // if(l_d=='Dhaka'){
    //     t=t+(t*0.2);
    // }

    let l_d = document.querySelector('select[name="city"]');
    // let l_d = document.getElementsByName('city').value;
    if (l_d && l_d.value === 'Dhaka') {
        t = t + (t * 0.2);
    }
    else{
        t=t+(t*0.1);
    }

    // let count=document.querySelectorAll("input[name=quantity]:checked").length;
    

    // document.getElementById('type').innerText=count;

    let count=document.querySelector("input[name=quantity]:checked");

    if (count && count.value === 'p') {
        t = t + 100;
    }

    document.getElementById('sum').innerText=t;

}