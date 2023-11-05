const errormsg=document.querySelector('.errormsg');
let randomnumb = 0;
let att=1;


function numbgenerator(){
    var minnumb=document.querySelector('#min').value;
    var maxnumb=document.querySelector('#max').value;
    randomnumb=Math.floor(Math.random()*(maxnumb-minnumb)+minnumb);
    
    console.log(maxnumb);

    console.log(`Number - ${randomnumb}`);
}
console.log(randomnumb);


function attemps(){
    let guess=document.getElementById('guess').value;
    let res=document.getElementById('res');
    
    if(guess==''){
        res.textContent='Please enter a number'
    }
    else if (guess == randomnumb){
        res.textContent='You won! Number of attemps: '+att
        att=0
    }
    else if(guess <= randomnumb){
        res.textContent='Number '+guess+' is too low'
        att+=1
    }
    else if(guess >= randomnumb){
        res.textContent='Number '+guess+' is too high'
        att+=1
    }
    console.log(guess);
    console.log(randomnumb);
}

