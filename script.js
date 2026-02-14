function startExperience(){
document.getElementById("music").play();
document.getElementById("intro").classList.add("fadeOut");

setTimeout(()=>{
document.getElementById("intro").style.display="none";
document.getElementById("main").classList.remove("hidden");
startHearts();
startAutoSlide();
},2000);
}

/* AUTOMATIC SLIDING */
const track=document.getElementById("carouselTrack");
const images=track.children;
let index=0;

function showSlide(i){
index=(i+images.length)%images.length;
track.style.transform=`translateX(${-index*100}%)`; // responsive
}

function startAutoSlide(){
setInterval(()=>{
showSlide(index+1);
},3000); // every 3 seconds
}

/* FALLING HEARTS */
function startHearts(){
setInterval(()=>{
const heart=document.createElement("div");
heart.className="heart";
heart.innerText="💖";
heart.style.left=Math.random()*100+"%";
heart.style.animationDuration=(3+Math.random()*2)+"s";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),5000);
},300);
}

/* SWEET LDR LOVE LETTER */
const text=`Hi My Bebiiiiiii❤️

Happyyyyy Valentinessss Dayyyy, Alam mo ba love kahit malayo tayo sa isa’t isa ngayon, ramdam ko palagiii ang pagmamahal mo sakinnnn. 
Bawat araw na hindi tayo magkasama, naiisip ko lahat ng mga alaala natin ang tawanan natin, ang lambingan natin na kahit sa chats, call and vc lang.

Sorry kung hindi ko masabi lahat ng gusto kong sabihin sayo, pero sana ramdam mo na mahallll na mahallll kitaaaa palagiiii kahit sa mga simpleng salita lang loveeee.
Sorry din love kung hindi tayo nakapag usap ng maayos nitong mga nakaraan araw, nabusy kasi tayong dalawa tapos hindi pa parehas ng freeday.
Babawi nalang me haaaa. Promise po yan bebiiiiiii.

Minsan naiisip ko kung gaano kahirap ang distance, pero sa bawat mensahe mo, sa bawat tawag natin, ramdam ko na wala talagang makakapalit sa’yo. 
Ikaw ang dahilan kung bakit kahit malayo, masaya pa rin ang puso ko. 

Gusto ko lang sabihin na pinapahalagahan ko lahat ng effort mo, lahat ng simpleng bagay na ginagawa mo para sa atin. 
Hindi ko alintana ang distansya, kasi alam ko, kahit anong layo, tayo ay magkasama sa puso at pangarap. 

Promise ko, darating din ang araw na palagi na tayong magkasama. 
Thankkkk youuuu sooo soooo muchhhhh sa pag intindi sakin palagi at pag titiis sa kakulitan ko.
Hanggang dulo, pipiliin kita araw araw. Pipiliin kita sa bawat tawag, bawat chats, bawat alaala natin. 

Mahallll na mahallll kitaaaa, at salamat sa pagiging ikaw. 
Happyyyy Valentine'ssss Dayyyy 💕
from your bebiiii.

sana magustuhan mo bebiiiiiii. I loveeeee youuuu sooooo sooooo muchhhhhh.`;

let i=0;

function startLetter(){
document.getElementById("letter").innerHTML="";
i=0;
typeWriter();
}

function typeWriter(){
if(i < text.length){
document.getElementById("letter").innerHTML+=text.charAt(i);
i++;
setTimeout(typeWriter,30);
}
}
