const fullVociDE =["Hallo", "Tschüss", "Haus", "Tisch"];
const FullVociEN =["Hello", "Goodby", "House", "Table"];
let vociDe = ["Hallo", "Tschüss", "Haus", "Tisch"];
let vociEn = ["Hello", "Goodby", "House", "Table"];
let progress = [2, 2, 2, 2]
let wordIndex;
let wordIndexFull;
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
    if (progress[wordIndexFull]==0){
      vociDe.splice(wordIndexFull,1);
      vociEn.splice(wordIndexFull,1);
    }
    document.getElementById("right").style.display="none";
    document.getElementById("wrong").style.display="none";
    wordIndex = getRandomInt(0,vociDe.length); //Index in VociDe des wort, das abgefragt wird
    deword = vociDe[wordIndex];
    enword = vociEn[wordIndex];
    wordIndexFull = fullVociDE.indexOf(deword); //Index des Wort in fullVociDE
    document.getElementById("word").textContent=deword;
    auswahl = [FullVociEN[getRandomInt(0,fullVociDE.length)], FullVociEN[getRandomInt(0,fullVociDE.length)], FullVociEN[getRandomInt(0,fullVociDE.length)]]; //Die drei falschen zur auswahl stehenden Antwort
    ordre = getRandomInt(1,5);//position der richtigen Antwort
    notactive = false;

    if (ordre==1){
     document.getElementById("button1").textContent=enword;
     document.getElementById("button2").textContent=auswahl[0];
     document.getElementById("button3").textContent=auswahl[1];
     document.getElementById("button4").textContent=auswahl[2];
    }

    if (ordre==2){
      document.getElementById("button1").textContent=auswahl[0];
      document.getElementById("button2").textContent=enword;
      document.getElementById("button3").textContent=auswahl[1];
      document.getElementById("button4").textContent=auswahl[2];
     }

     if (ordre==3){
      document.getElementById("button1").textContent=auswahl[0];
      document.getElementById("button2").textContent=auswahl[1];
      document.getElementById("button3").textContent=enword;
      document.getElementById("button4").textContent=auswahl[2];
     }

     if (ordre==4){
      document.getElementById("button1").textContent=auswahl[0];
      document.getElementById("button2").textContent=auswahl[1];
      document.getElementById("button3").textContent=auswahl[2];
      document.getElementById("button4").textContent=enword;
    }
    console.log(progress);
    console.log(vociDe);
    console.log(wordIndexFull);
    console.log(fullVociDE);
}

function trueanswer(){
  notactive=true;
  document.getElementById("right").style.display="flex";
  progress[wordIndexFull] = progress[wordIndexFull]-1;
  setTimeout(function() {
    chooseword();
  }, 800);
}

function falseanswer(){
  notactive=true;
  document.getElementById("wrong").style.display="flex";
  progress[wordIndexFull] = progress[wordIndexFull]+1;
  document.getElementById("rightword").textContent=enword;
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
  if (notactive === true){
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
  if (notactive === true){
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
  if (notactive === true){
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
console.log(auswahl)