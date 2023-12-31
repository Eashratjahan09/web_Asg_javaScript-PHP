function calculateBill(){
    let x = Number(document.getElementById('txn').value);
    let hd = document.getElementById('r').checked;
    let tip = Number(document.getElementById('tip').value);
    let y = document.getElementById('loc').value;
    let each = 12.5;
    bill = each * x;
    if(x>=1 && x<=9){ // discount
        bill = bill*0.9;
    }
    else if(x>=10 && x<=19){// discount
        bill = bill*0.85;
    }
    else if(x>=20){// discount
        bill = bill*0.80;
    }
    if(hd){ // home delivery true
        bill = bill + 40;
    }
    bill = bill + tip; // adding tip
    if(y=='dhaka'){ // location wise tax
        bill = bill * 1.2;
    }
    else{
        bill = bill * 1.1;
    }
    document.getElementById('lbl').innerText = bill;


   
}
