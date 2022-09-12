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
    auswahl = [getRandomInt(0,vociDe.length), getRandomInt(0,vociDe.length), getRandomInt(0,vociDe.length)]; //Die drei falschen zur auswahl stehenden Antwort
    ordre = getRandomInt(1,4);//position der richtigen Antwort

    if (ordre==1){
     document.getElementById("button1").textContent=enword;
     document.getElementById("button2").textContent=vocidDE[auswahl[1]];
     document.getElementById("button3").textContent=vociDe[auswahl[2]];
     document.getElementById("button4").textContent=vociDe[auswahl[3]];
    }

    if (ordre==2){
      document.getElementById("button1").textContent=vociDe[auswahl[1]];
      document.getElementById("button2").textContent=enword;
      document.getElementById("button3").textContent=vociDe[auswahl[2]];
      document.getElementById("button4").textContent=vociDe[auswahl[3]];
     }

     if (ordre==3){
      document.getElementById("button1").textContent=vociDe[auswahl[1]];
      document.getElementById("button2").textContent=vociDeauswahl[2];
      document.getElementById("button3").textContent=enword;
      document.getElementById("button4").textContent=vociDe[auswahl[3]];
     }

     if (ordre==4){
      document.getElementById("button1").textContent=vociDe[auswahl[1]];
      document.getElementById("button2").textContent=vociDe[auswahl[2]];
      document.getElementById("button3").textContent=enword;
      document.getElementById("button4").textContent=vociDe[auswahl[3]];
     }
}

function trueanswer(){
  document.getElementById("right").style.display="flex";
  progress[wordIndex] = progress[wordIndex]-1;
}

function falseanswer(){
  document.getElementById("wrong").style.display="flex";
  progress[wordIndex] = progress[wordIndex]-1;
}

function button1(){
  if (ordre == 1){
    console.log("true");
    trueanswer();
  }
  else {
    console.log("false")
    falseanswer();
  }
}

function button2(){
  if (ordre == 2){
    console.log("true");
    trueanswer();
  }
  else {
    console.log("false")
    falseanswer();
  }
}

function button3(){
  if (ordre == 3){
    console.log("true");
    trueanswer();
  }
  else {
    console.log("false");
    falseanswer();
  }
}

function button4(){
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