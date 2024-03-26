var j = -5;
var txt = 'Hello, I am Abdulrhman Mehyo';
var speed = 60;

function typemyname() {
  if (j < txt.length) {
    document.getElementById("myname").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typemyname, speed);
  }

}

var m = -40;
var txtm = 'Front-End Web Developer';
var speedm = 60;

function typemymajor() {
  if (m < txtm.length) {
    document.getElementById("mymajor").innerHTML += txtm.charAt(m);
    m++;
    setTimeout(typemymajor, speedm);
  }

}
  
var d = -60;
var txtd = 'I build websites in ';
var speedd = 60;

function typedescrip() {
  if (d < txtd.length) {
    document.getElementById("descrip").innerHTML += txtd.charAt(d);
    d++;
    setTimeout(typedescrip, speedd);
    
  }else{




    let i = 0;

const words = ["HTML","CSS","JavaScript"];
      let counter;
      function typeNow() {
         let word = words[i].split("");
         var loopTyping = function() {
            if (word.length > 0) {
               document.getElementById('text').innerHTML += word.shift();
            } else {
               deleteNow();
               return false;
            };
            counter = setTimeout(loopTyping, 500);
         };
         loopTyping();
      };
      function deleteNow() {
         let word = words[i].split("");
         var loopDeleting = function() {
            if (word.length > 0) {
               word.pop();
               document.getElementById('text').innerHTML = word.join("");
            } else {
               if (words.length > (i + 1)) {
                  i++;
               } else {
                  i = 0;
               };
               typeNow();
               return false;
            };
            counter = setTimeout(loopDeleting, 200);
         };
         loopDeleting();
      };
      typeNow();
  }}

function myindicator(){
    document.getElementById("indicator").innerHTML="|";
}

setTimeout(myindicator,4000);


var currentlanguage = 'en'
function changelang(){
if (currentlanguage == 'en'){
   document.getElementById("myname").innerHTML = "Hallo, Ich bin Abdulrhman Mehyo";
   document.getElementById("mymajor").innerHTML = "Front-End Web Entwickler";
   document.getElementById("descrip").innerHTML = "Ich erstelle websites in ";
   
document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-du);}</style>');
currentlanguage = 'du'
} else {
   document.getElementById("myname").innerHTML = "Hello, I am Abdulrhman Mehyo";
   document.getElementById("mymajor").innerHTML = "Front-End Web Developer";
   document.getElementById("descrip").innerHTML = "I build websites in ";
document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-en);}</style>');
currentlanguage = 'en'
}
};

//loader
$(window).on("load", (function() {
   $(".loader-wrapper").fadeOut(1e3),
   setTimeout((function() {

       document.documentElement.style.overflow = "visible",
       timerBar();
   }
   ), 900);
   
 }
 )),
 window.onerror = function() {
   document.querySelector(".loader-wrapper").style.display = "none",
   document.documentElement.style.overflow = "visible"
 }
 ;
