const forms = document.getElementById("forms")
 
const registeredimage = document.getElementById("image1")
const Detailscollected = document.getElementById("image2")
const dicegameimage = document.getElementById("image3")
const couponcode = document.getElementById("couponcode")
const details = document.getElementById("details")
const dice = document.getElementById("dice")
 

 
let touchimage1 = false;
let touchimag2 = false;
let touchimage3 = false;
let touchimage4 = false;
 
let formstatus = false;
registeredimage.addEventListener("click", function(){
    if(touchimage1 === false){
    forms.style.display = "block" 
    touchimage1 = true;
    }
});
 
 
 
 
document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    if(name != '' && email != '' && username !=''){
        alert("You have successfully registered for the game , Click the next image to Proceed ")
        formstatus = true;
 
    }else{
        alert("Please enter Valid  Registration details")
    }
});

    Detailscollected.addEventListener("click",function(){  
    if((touchimage1 === true && touchimag2 === false )&& (formstatus===true)){
 
    forms.style.display = "none";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    details.innerHTML = `<h3>Registration Details</h3><p>Name : ${name} </p> <p>Email id: ${email} </p> <p>Username : ${username}</p>`
    details.style.color = "black"
 
        touchimag2 = true;
 
}
});
 
 

    dicegameimage.addEventListener("click", function(){
    if(touchimag2 === true && touchimage3 === false){       
        details.style.display ="none";
        dice.style.display = "block";
 
        touchimage3 = true;
 
}
 
})
 
let count = 0;
let attempt = 1;
let MARK = document.getElementById("score")
let totalmarks = document.getElementById("totalscore")
let sum = 0;
const coupon = document.getElementById("image4")
const congrats = document.getElementById("congratualationsimage")
let rounds = document.getElementById("rounds")
dice.addEventListener("click",function(){       
    if(attempt<=2){
        count++;
        if(count<=3 ){
            const random = Math.floor(Math.random() * 6 +1) 
            sum += random
            rounds.innerText = `Number of Times dices rolled : ${count}`
            MARK.innerText = `Points : ${random}`;
            totalmarks.innerText = `Total Points : ${sum}`
 
        }
 
        else{
            if(sum>10){
                coupon.addEventListener("click" , function(){
                if(touchimage3 === true && touchimage4 === false){
 
                    let couponNumber = "";
                    let alphabets = "abcdefghijklmnopqrstuvwxyz" 
                    for(let i=0; i<=12; i++){
                        let newletter = Math.floor(Math.random() * 26 +1)
                        couponNumber += alphabets.charAt(newletter)
                    }
                    
                    couponcode.innerText = `Coupon Code : ${couponNumber}`
                    couponcode.style.backgroundColor = "orange"
                    couponcode.style.color = "green" 
                    
                
                    congrats.style.display = "block"
 
                        touchimage4 = true;
                }
                })
            }
            else if(sum<=10 && attempt == 1){
                alert("Try again after scoring more than 10")
                count = 0;
                sum = 0;
                attempt++;
            }
            else if(sum<=10 && attempt >=2){
                alert("Bad Luck")
            }
        }
    }
});