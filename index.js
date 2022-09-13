const fullVociDE =["Hallo", "Tschüss", "Haus", "Tisch"];
const FullVociEN =["Hello", "Goodby", "House", "Table"];
let vociDe = ["Hallo", "Tschüss", "Haus", "Tisch"];
let vociEn = ["Hello", "Goodby", "House", "Table"];
let progress = [1, 1, 1, 1]
let wordIndex;
let auswahl;
let ordre;
let deword;
let enword;
let notactive;

//Cookie:

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie(cname) {
    let cookiename = getCookie(cname);
    if (cookiename != "") {
      return false
    } else {
      return true
      }
    }
  


function store(ID){
    setCookie(VociID, ID, 365)
    return "store"
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function chooseword(){
    document.getElementById("right").style.display="none";
    document.getElementById("wrong").style.display="none";
    wordIndex = getRandomInt(0,vociDe.length); //das Wort das Abgefragt wird
    deword = fullVociDE[wordIndex];
    enword = FullVociEN[wordIndex];
    document.getElementById("word").textContent=deword;
    auswahl = [getRandomInt(0,fullVociDE.length), getRandomInt(0,fullVociDE.length), getRandomInt(0,fullVociDE.length)]; //Die drei falschen zur auswahl stehenden Antwort
    ordre = getRandomInt(1,5);//position der richtigen Antwort
    notactive = false;

    if (ordre==1){
     document.getElementById("button1").textContent=enword;
     document.getElementById("button2").textContent=FullVociEN[auswahl[0]];
     document.getElementById("button3").textContent=FullVociEN[auswahl[1]];
     document.getElementById("button4").textContent=FullVociEN[auswahl[2]];
    }

    if (ordre==2){
      document.getElementById("button1").textContent=FullVociEN[auswahl[0]];
      document.getElementById("button2").textContent=enword;
      document.getElementById("button3").textContent=FullVociEN[auswahl[1]];
      document.getElementById("button4").textContent=FullVociEN[auswahl[2]];
     }

     if (ordre==3){
      document.getElementById("button1").textContent=FullVociEN[auswahl[0]];
      document.getElementById("button2").textContent=FullVociEN[auswahl[1]];
      document.getElementById("button3").textContent=enword;
      document.getElementById("button4").textContent=FullVociEN[auswahl[2]];
     }

     if (ordre==4){
      document.getElementById("button1").textContent=FullVociEN[auswahl[0]];
      document.getElementById("button2").textContent=FullVociEN[auswahl[1]];
      document.getElementById("button3").textContent=FullVociEN[auswahl[2]];
      document.getElementById("button4").textContent=enword;
    }
}

function trueanswer(){
  notactive=true;
  document.getElementById("right").style.display="flex";
  progress[wordIndex] = progress[wordIndex]-1;
  setTimeout(function() {
    chooseword();
  }, 800);
}

function falseanswer(){
  notactive=true;
  document.getElementById("wrong").style.display="flex";
  progress[wordIndex] = progress[wordIndex]-1;
  document.getElementById("rightword").textContent=enword;
  document.addEventListener("keyup", function(event) {
    if (event.code === "Space") {
        chooseword();
    }
    return
  });
  return
}

function button1(){
  while (notactive === true){
    return
  }
  if (ordre == 1){
    console.log("true");
    trueanswer();
  }
  else {
    console.log("false")
    falseanswer();
  }
  return
}

function button2(){
  while (notactive === true){
    return
  }
  if (ordre == 2){
    console.log("true");
    trueanswer();
  }
  else {
    console.log("false")
    falseanswer();
  }
  return
}

function button3(){
  while (notactive === true){
    return
  }
  if (ordre == 3){
    console.log("true");
    trueanswer();
  }
  else {
    console.log("false");
    falseanswer();
  }
  return
}

function button4(){
  while (notactive === true){
    return
  }
  if (ordre == 4){
    console.log("true");
    trueanswer();
  }
  else {
    console.log("false");
    falseanswer();
  }
}

chooseword();
console.log(FullVociEN[auswahl[1]])
console.log(FullVociEN[auswahl[2]])
console.log(FullVociEN[auswahl[0]])
console.log(auswahl)
document.addEventListener("keyup", function(event) {
  console.log(event.code)
  return
});