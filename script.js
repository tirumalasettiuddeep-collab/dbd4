// =============================
// PAGE SELECTORS
// =============================

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const cuteMessage = document.getElementById("cuteMessage");

// =============================
// FUNNY MESSAGES
// =============================

const messages = [

"😤 How dare you!! Come back!",

"🥺 Pleaseeeee...",

"🐱 You're making the kittens cry!",

"🐶 Just one click... Please?",

"😭 Uddeep worked really hard on this!",

"😒 Nope... You can't escape!",

"🤭 Nice try!",

"🐾 The YES button is much better!"

];

let count = 0;

// =============================
// RUNNING NO BUTTON
// =============================

function moveNoButton(){

const maxX = window.innerWidth - noBtn.offsetWidth - 40;
const maxY = window.innerHeight - noBtn.offsetHeight - 40;

const x = Math.random() * maxX;
const y = Math.random() * maxY;

noBtn.style.position = "fixed";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

cuteMessage.innerHTML = messages[count];

count++;

if(count >= messages.length){

count = 0;

}

yesBtn.style.transform =
`scale(${1 + count*0.08})`;

if(yesBtn.style.transform > 1.6){

yesBtn.style.transform="scale(1.6)";

}

}

// Desktop
noBtn.addEventListener("mouseover",moveNoButton);

// Mobile
noBtn.addEventListener("touchstart",function(e){

e.preventDefault();

moveNoButton();

});

// =============================
// YES BUTTON
// =============================

yesBtn.addEventListener("click",function(){

cuteMessage.innerHTML="🥹💖 Good Girl!! I knew you'd click YES!!";

setTimeout(function(){

page1.classList.remove("active");

page2.classList.add("active");

},1800);

});

// =============================
// GIFT BUTTON
// =============================

const gift=document.getElementById("giftBox");

gift.addEventListener("click",function(){

gift.style.transform="scale(1.3) rotate(15deg)";

gift.innerHTML="🎉";

setTimeout(function(){

alert("🎂 Happy Birthday Divya ❤️\n\nThe next page will open in Part 2.");

},1000);

});

// =============================
// FLOATING HEARTS
// =============================

const heartContainer=document.querySelector(".floating-hearts");

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.top="100%";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.opacity=".8";

heart.style.transition="6s linear";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6200);

}

setInterval(createHeart,700);
/* ===========================
PAGE 3
=========================== */

.birthdayReveal{

text-align:center;

}

.birthdayTitle{

font-size:65px;

color:#ff4f92;

margin-bottom:20px;

animation:pulse 2s infinite;

}

.birthdaySub{

font-size:24px;

margin-bottom:40px;

color:#666;

}

.giftBox3D{

position:relative;

width:220px;

height:220px;

margin:auto;

cursor:pointer;

transition:.6s;

}

.giftBody{

position:absolute;

bottom:0;

width:220px;

height:160px;

background:#ff7eb6;

border-radius:15px;

}

.giftLid{

position:absolute;

top:20px;

width:220px;

height:45px;

background:#ff97c7;

border-radius:12px;

transition:.8s;

transform-origin:left center;

}

.giftRibbonV{

position:absolute;

left:95px;

width:30px;

height:220px;

background:white;

}

.giftRibbonH{

position:absolute;

top:75px;

width:220px;

height:28px;

background:white;

}

#openGiftButton{

margin-top:40px;

background:#ff4f92;

color:white;

font-size:22px;

padding:18px 40px;

border:none;

border-radius:50px;

cursor:pointer;

transition:.3s;

}

#openGiftButton:hover{

transform:scale(1.08);

box-shadow:0 0 25px pink;

}

@keyframes pulse{

0%{

transform:scale(1);

}

50%{

transform:scale(1.05);

}

100%{

transform:scale(1);

}

}
// =============================
// PAGE 4
// =============================

const page4=document.getElementById("page4");

const nextPageButton=document.getElementById("nextPageButton");


openGiftButton.addEventListener("click",function(){

    page3.classList.remove("active");

    page4.classList.add("active");

});


nextPageButton.addEventListener("click",function(){

    alert("💖 More surprises are waiting...");

});
// =============================
// PAGE 5
// =============================

const page5=document.getElementById("page5");

const songButton=document.getElementById("songButton");


nextPageButton.addEventListener("click",function(){

    page4.classList.remove("active");

    page5.classList.add("active");

});


songButton.addEventListener("click",function(){

    alert("🎶 Your special song will play here ❤️");

});
// =============================
// PAGE 6 COUNTDOWN
// =============================


const page6=document.getElementById("page6");

const finalPage=document.getElementById("finalPage");


songButton.addEventListener("click",function(){

    page5.classList.remove("active");

    page6.classList.add("active");

});


// Birthday date

const birthdayDate = new Date("January 26, 2027 00:00:00").getTime();


setInterval(function(){

    let now = new Date().getTime();

    let distance = birthdayDate - now;


    let days=Math.floor(distance/(1000*60*60*24));

    let hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    let minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    let seconds=Math.floor((distance%(1000*60))/1000);


    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;


},1000);



// Hidden access

document.addEventListener("keydown",function(e){

    if(e.ctrlKey && e.shiftKey && e.key==="D"){

        let password=prompt("Enter secret password");


        if(password==="26"){

            page6.classList.remove("active");

            finalPage.classList.add("active");

        }

    }

});
