////1214_Voiceclock_20cities


//int LEDOutput ;
int ledPins[] = {
  2, 53, 49, 33, 12, 11, 47, 50, 51, 41, 3, 26, 5, 7, 8, 10, 9, 30, 36, 4
};
int incomingByte;

void setup() {
  Serial.begin(9600);
  //for (int thisLed = 0; thisLed < ledCount; thisLed++) {
  pinMode(ledPins[0], OUTPUT);
  pinMode(ledPins[1], OUTPUT);
  pinMode(ledPins[2], OUTPUT);
  pinMode(ledPins[3], OUTPUT);
  pinMode(ledPins[4], OUTPUT);
  pinMode(ledPins[5], OUTPUT);
  pinMode(ledPins[6], OUTPUT);
  pinMode(ledPins[7], OUTPUT);
  pinMode(ledPins[8], OUTPUT);
  pinMode(ledPins[9], OUTPUT);
  pinMode(ledPins[10], OUTPUT);
  pinMode(ledPins[11], OUTPUT);
  pinMode(ledPins[12], OUTPUT);
  pinMode(ledPins[13], OUTPUT);
  pinMode(ledPins[14], OUTPUT);
  pinMode(ledPins[15], OUTPUT);
  pinMode(ledPins[16], OUTPUT);
  pinMode(ledPins[17], OUTPUT);
  pinMode(ledPins[18], OUTPUT);
  pinMode(ledPins[19], OUTPUT);

}


void loop() {

  for (int p = 0; p < 20; p ++) {
  if (Serial.available() > 0) {
     incomingByte = Serial.read();
   if (incomingByte == 0) {
       digitalWrite(ledPins[0], LOW);
      digitalWrite(ledPins[p], LOW);
     }
     if (incomingByte == 1) {
        digitalWrite(ledPins[1], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 2) {
        digitalWrite(ledPins[2], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 3) {
        Serial.println("wrong one 3");
        digitalWrite(ledPins[3], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 4) {
        // London
        Serial.print("data ");
        Serial.print(ledPins[incomingByte]);
        digitalWrite(ledPins[4], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 5) {
        Serial.println("wrong one 5");
        digitalWrite(ledPins[5], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 6) {
        digitalWrite(ledPins[6], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 7) {
        digitalWrite(ledPins[7], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 8) {
        digitalWrite(ledPins[8], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 9) {
        digitalWrite(ledPins[9], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 10) {
        digitalWrite(ledPins[10], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 11) {
        digitalWrite(ledPins[11], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 12) {
        digitalWrite(ledPins[12], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 13) {
        digitalWrite(ledPins[13], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 14) {
        digitalWrite(ledPins[14], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 15) {
        digitalWrite(ledPins[15], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 16) {
        digitalWrite(ledPins[16], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 17) {
        digitalWrite(ledPins[17], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 18) {
        digitalWrite(ledPins[18], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
      else if (incomingByte == 19) {
        digitalWrite(ledPins[19], HIGH);
        digitalWrite(ledPins[p], LOW);
      }
    }
  }
}
