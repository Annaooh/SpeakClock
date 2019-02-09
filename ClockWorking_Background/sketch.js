/*
1213_Voice clock V1
*/
var mic;
var citiesTime = [];
let timeGap; //anther cities' current hour
let differences = 0; //timedifferences
let bg = [];
let nyLight = 0; // Newyork natural light
var img;
//background image
let imgOne = 0;
let imgTwo = 1;
let imgthree = 2;
let imgfour = 3;
let imgfive = 4;
let imgsix = 5;
let nextIndex;
let serial;
var portName = '/dev/cu.usbmodem14131'; // fill in your serial port name here
var inData; // for incoming serial data
var outByte = 0;


function preload() {


  for (let i = 1; i < 7; i++) {
    bg.push(loadImage("HH/dd" + i + ".png"));
  }
}

function setup() {
  //frameRate(500)
  createCanvas(1600,800);
  angleMode(DEGREES);

  mic = new p5.AudioIn()
  mic.start();

  let lang = navigator.language || 'en-US'
  speechRec = new p5.SpeechRec('lang', gotSpeech);
  speechRec.continuous = true;
  speechRec.start();

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('data', serialEvent); // callback for when new data arrives
  // serial.on('error', serialError); // callback for errors
  serial.open(portName); // open a serial port
}

function serialEvent() {
  // read a byte from the serial port:
  var inByte = serial.read();
  // store it in a global variable:
  inData = inByte;
}

// function serialError(err) {
//   println('Something went wrong with the serial port. ' + err);
// }

// }
function nyskylight() {
  let hr = 0;
  hr = hour() + differences;
  // differences = 0;
  push();
  //hr = hour();
  rotate(360);
  //translate(-411,-307.2);
  if (hr >= 3 && hr < 6) {
    console.log("nytime03to06");
    image(bg[imgOne], 0, 0);
  } else if (hr >= 6 && hr < 8) {
    console.log("nytime06to08");
    image(bg[imgTwo], 0, 0);
  } else if (hr >= 8 && hr < 16) {
    console.log("nytime08to16");
    image(bg[imgthree], 0, 0);
  } else if (hr >= 16 && hr < 19) {
    console.log("nytime16to19");
    image(bg[imgfour], 0, 0);
  } else if (hr >= 19 && hr < 22) {
    console.log("nytime19to22");
    image(bg[imgfive], 0, 0);
  } else if (hr >= 22 && hr < 24) {
    image(bg[imgsix], 0, 0);
    console.log("nytime22to24");
  } else if (hr >= 24 && hr < 27) {
    image(bg[imgsix], 0, 0);
    console.log("nytime24to03");
  } else if (hr >= 27 && hr < 30) {
    image(bg[imgOne], 0, 0);
    console.log("nytime03to06");
  } else if (hr >= 30 && hr < 32) {
    image(bg[imgTwo], 0, 0);
    console.log("nytime06to08");
  } else if (hr >= 32 && hr < 40) {
    image(bg[imgthree], 0, 0);
    console.log("nytime08to16");
      } else if (hr >= 40 && hr < 43) {
    image(bg[imgfour], 0, 0);
    console.log("nytime16to19");
           } else if (hr >= 43 && hr < 46) {
    image(bg[imgfive], 0, 0);
    console.log("nytime19to22");
         } else if (hr >= 46 && hr < 48) {
    image(bg[imgsix], 0, 0);
    console.log("nytime19to22");


  } else if (hr >= 0 && hr < 3) {
    image(bg[imgsix], 0, 0);
    console.log("nytime24to03");
  }
  pop();
}


function timetime() {

  hr = hour() + differences;
  let mn = minute();
  let sc = second();

  ////HandMovement
  let secondAngle = map(sc, 0, 59, 0, 360);
  let minuteAngle = map(mn, 0, 59, 0, 360);
  let hourAngle = map(hr % 12, 0, 12, 0, 360) + (minuteAngle / 12);


  ////HandDesign
  push();
  translate(800, 400);
  rotate(-90);

  rotate(secondAngle);
  stroke(255);
  strokeWeight(3)
  line(0, 0, 150, 0);
  pop();

  push();
  translate(800, 400);
  rotate(-90);

  rotate(minuteAngle);
  stroke(255);
  strokeWeight(6);
  line(0, 0, 220, 0);
  pop();

  push();
  translate(800, 400);
  rotate(-90);

  rotate(hourAngle);
  stroke(255);
  strokeWeight(10);
  line(0, 0, 150, 0);
  pop();

}

function NYTime() {
  differences = 0;
  outByte = 0; // send it out the serial port:
  serial.write(outByte);
}

function SantiagoTime() {///light
  differences = 2;
  outByte = 1; // send it out the serial port:
  serial.write(outByte);
}

function CuritibaTime() {
  differences = 3;
  outByte = 2; // send it out the serial port:
  serial.write(outByte);
}

function BarcelonaTime() {
  differences = 6;
  outByte = 3; // send it out the serial port:
  serial.write(outByte);
}

function LondonTime() {
  differences = 5;
  outByte = 4;
  serial.write(outByte);
}

function ParisTime() {//light
  differences = 6;
  outByte = 5;
  serial.write(outByte);
}

function MunichTime() {
  differences = 7;
  outByte = 6;
  serial.write(outByte);
}

function HelsinkiTime() {
  differences = 7;
  outByte = 7;
  serial.write(outByte);
}

function MinskTime() {
  differences = 8;
  outByte = 8;
  serial.write(outByte);
}

function IstanbulTime() {
  differences = 9;
  outByte = 9;
  serial.write(outByte);
}

function MumbaiTime() {///
  differences = 10;
  outByte = 10;
  serial.write(outByte);
}

function BangkokTime() {//light
  differences = 11;
  outByte = 11;
  serial.write(outByte);
}

function SingaporeTime() {
  differences = 13;
  outByte = 12;
  serial.write(outByte);
}

function SaigonTime() {//light
  differences = 12;
  outByte = 13;
  serial.write(outByte);
}

function ShanghaiTime() {//light
  differences = 13;
  outByte = 14;
  serial.write(outByte);
}

function TaipeiTime() {
  differences = 13;
  outByte = 15;
  serial.write(outByte);
}

function SeoulTime() {
  differences = 14;
  outByte = 16;
  serial.write(outByte);
}

function TokyoTime() {
  differences = 14;
  outByte = 17;
  serial.write(outByte);
}

function VancouverTime() {// not acting agian
  differences = -3;
  outByte = 18;
  serial.write(outByte);
}

function DallasTime() {
  differences = -1;
  outByte = 19;
  serial.write(outByte);
}


function draw() {
  background(255);
  nyskylight();
  timetime();
  if (speechRec.hasOwnProperty("resultString")) {}
  micLevel = mic.getLevel()

  if (speechRec.resultString == 'Newyork'||speechRec.resultString == 'neuyorc') { //////thisisvoiceInput
    print("Currenttime!");
    //translate(409.4,307.2);
    nyskylight();
    timetime();
    NYTime()
  } else if (speechRec.resultString == 'Curitiba') {
    print("Curitiba");
    nyskylight();
    timetime();
    CuritibaTime();
  } else if (speechRec.resultString == 'Santiago') {
    print("Santiago");
    nyskylight();
    timetime();
    SantiagoTime();

  } else if (speechRec.resultString == 'London') {
    print("London");
    nyskylight();
    timetime();
    LondonTime();
  } else if (speechRec.resultString == 'Bacelona') {
    print("Bacelona");
    nyskylight();
    timetime();
    BalcelonaTime();
  } else if (speechRec.resultString == 'Paris') {
    print("Paris");
    nyskylight();
    timetime();
    ParisTime();
  } else if (speechRec.resultString == 'Munich') {
    print("Munich");
    nyskylight();
    timetime();
    MunichTime();
  } else if (speechRec.resultString == 'Helsinki') {
    print("Helsinki");
    nyskylight();
    timetime();
    HelsinkiTime();
  } else if (speechRec.resultString == 'Minsk') {
    print("Minsk");
    nyskylight();
    timetime();
    MinskTime();
  } else if (speechRec.resultString == 'Istanbul') {
    print("Istanbul");
    nyskylight();
    timetime();
    IstanbulTime();
  } else if (speechRec.resultString == 'Mumbai') {
    print("Mumbai");
    nyskylight();
    timetime();
    MumbaiTime();
  } else if (speechRec.resultString == 'Bangkok') {
    print("Bangkok");
    nyskylight();
    timetime();
    BangkokTime();
  } else if (speechRec.resultString == 'Saigon') {
    print("Saigon");
    nyskylight();
    timetime();
    SaigonTime();
  } else if (speechRec.resultString == 'Shanghai') {
    print("Shanghai");
    nyskylight();
    timetime();
    ShanghaiTime();
     } else if (speechRec.resultString == 'Taipei') {
    print("Taipei");
    nyskylight();
    timetime();
    ShanghaiTime();
  } else if (speechRec.resultString == 'Seoul'||speechRec.resultString == 'soul') {
    print("Seoul");
    nyskylight();
    timetime();
    SeoulTime();
  } else if (speechRec.resultString == 'Tokyo') {
    print("Tokyo");
    nyskylight();
    timetime();
    TokyoTime();
  } else if (speechRec.resultString == 'Vancouver') {
    print("Vancouver");
    nyskylight();
    timetime();
    VancouverTime();
  } else if (speechRec.resultString == 'Dallas') {
    print("Dallas");
    nyskylight();
    timetime();
    DallasTime();
  }
}

function gotSpeech() {
  console.log("I got result, the result is");
  console.log(speechRec.resultString);
  console.log("----------------------------")
}