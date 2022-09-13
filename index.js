const fullVociDE =["Hallo", "Tschüss", "Haus", "Tisch"]; //Alle Vocis
const FullVociEN =["Hello", "Goodby", "House", "Table"]; 
let vociDe = ["Hallo", "Tschüss", "Haus", "Tisch"];//Vocis, die noch gelernt werden müssen
let vociEn = ["Hello", "Goodby", "House", "Table"];
let progress = [2, 2, 2, 2]
let wordIndex; //Variablen für später definieren
let wordIndexFull;
let auswahl;
let ordre;
let deword;
let enword;
let notactive;

//Cookie:
//Cookie erstellen:
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  //Cookie auslesen
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
  //Vorhandensein eines Cookies überprüfen
  function checkCookie(cname) {
    let cookiename = getCookie(cname);
    if (cookiename != "") {
      return false
    } else {
      return true
      }
    }
  
//End off Cookie
//Get a random Integer:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//Generation of everythin:
function chooseword(){
    if (progress[wordIndexFull]==0){ //Wenn der Progress dieses Wortes Null ist:
      vociDe.splice(wordIndexFull,1); //Wort aus vociDe entfernen
      vociEn.splice(wordIndexFull,1); //Wort aus vociEn entfernen
    }
    document.getElementById("right").style.display="none"; //Richtig Banner ausblenden
    document.getElementById("wrong").style.display="none"; //Falsch Banner ausblenden
    wordIndex = getRandomInt(0,vociDe.length); //Index in VociDe des wortes, das abgefragt wird
    deword = vociDe[wordIndex]; //Deutsches Wort
    enword = vociEn[wordIndex]; //Englische übersetzung
    wordIndexFull = fullVociDE.indexOf(deword); //Index des Wort in fullVociDE
    document.getElementById("word").textContent=deword; //Wort auf Webseite schreiben
    auswahl = [FullVociEN[getRandomInt(0,fullVociDE.length)], FullVociEN[getRandomInt(0,fullVociDE.length)], FullVociEN[getRandomInt(0,fullVociDE.length)]]; //Die drei falschen zur auswahl stehenden Antwortsmöglichkeiten generieren.
    ordre = getRandomInt(1,5);//position der richtigen Antwort
    notactive = false;//Variable, die verhindert, dass man zweimal Antworten kann -> Hier wird sie auf False gesetzt -> man kann Antwort wählen.
    if (progress[wordIndexFull]>1){ //Wenn Index grösser als 1-> Multiple Choice
        document.getElementById("choose").style.display="block";//choose einblenden
        document.getElementById("write").style.display="none";//write ausblenden
        //Buttons beschriften:
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
      
    }
    if (progress[wordIndexFull] == 1){ //Wenn Progress gleich 1 -> Antwort per Tastatureingabe
      document.getElementById("choose").style.display="none";//choose ausblenden
      document.getElementById("write").style.display="block";//write einblenden
    }


    console.log(progress);
    console.log(vociDe);
    console.log(wordIndexFull);
    console.log(fullVociDE);
    console.log("Richtig: "+ordre)
}
//Wird ausgeführt, wenn der richtige Button gedrückt wurde.
function trueanswer(){
  notactive=true;//Man kann nicht mehr antworten -> keine zweite Antwort möglich
  document.getElementById("right").style.display="flex";//Richtig Banner wird eingeblendet
  progress[wordIndexFull] = progress[wordIndexFull]-1;//Progress um 1 gesenkt
  setTimeout(function() {//warte 800ms befor wieder chooseword() aufgerufen wird
    chooseword();
  }, 800);
}
//Wenn Falscher Button gedrückt wird:
function falseanswer(){
  notactive=true;//Man kann nicht mehr antworten -> keine zweite Antwort möglich
  document.getElementById("wrong").style.display="flex";//Falsch Banner einblenden
  progress[wordIndexFull] = progress[wordIndexFull]+1;//Progress um 1 erhöhen
  document.getElementById("rightword").textContent=enword;//richtiges Wort anzeigen
  return
}
//wird bei klick auf den jeweiligen button ausgeführt:
function button1(){
  while (notactive === true){//wenn man nicht Antorten kann->funktion beenden
    return
  }
  if (ordre == 1){//wenn dieser Button die richtige Antwort ist:
    console.log("true");
    trueanswer();//Führe trueanswer() aus
  }
  else {//ansonsten:
    console.log("false")
    falseanswer();//führe falseanswer() aus.
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