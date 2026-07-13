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
