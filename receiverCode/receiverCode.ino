//GSM library
#include <SoftwareSerial.h>
SoftwareSerial mySerial(3,2); //A6 Tx & Rx is connected to Arduino #3 & #2

String BPM = "";
String bodyTemp = "";
String Data = "";

int buzzerPin = 11;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(38400); // Default communication rate of the Bluetooth module
  //dont forget baud rate is 38400 but for simulation 9600 is used
  mySerial.begin(38400);

  pinMode(buzzerPin, OUTPUT);
}

void loop() {
 BPM = "";
 bodyTemp = "";
 Data = "";
  // put your main code here, to run repeatedly:
  if(Serial.available() > 0){
    char command = 'A';
    int full = 1;
    do{
   // Checks whether data is comming from the serial port
    command = Serial.read(); // Receive a single character from the software serial port
    //concat data string till end of sentence is reached
    if(command != '\n'){
       Data.concat(command); // Add the received character to the receive buffer
    }
    else{
      full = 1;
      }
 }while(Serial.available() > 0 && command != '\n');
 if(full == 1){
  full = 0;
  BPM = getValue(Data,':',0);
  bodyTemp = getValue(Data,':',1);
 delay(500);
 Data = "";
  }
}
 
 Data = "";
 /*if(bodyTemp != NULL && BPM != NULL){
 Serial.println("");
 Serial.print(BPM);
 Serial.print("");
 Serial.print(bodyTemp);
 //Serial.print("body temp printed");
 }
 else{
  //Serial.println("Please wait system acquiring data...");
  }*/
 /***********************************send data to ThingSpeak channel -- GSM***********************************/
 //preparing the GSM for sending data values to ThingSpeak channel
if(bodyTemp != "" && BPM != ""){
  mySerial.println("AT"); //Once the handshake test is successful, it will back to OK
  updateSerial();
  delay(1000);
  mySerial.println("AT+CIPSHUT");
  updateSerial();
  delay(2000);
  mySerial.println("AT+CIPSTATUS");
  updateSerial();
  delay(2000);
  mySerial.println("AT+CIPMUX=0");
  updateSerial();
  delay(2000);
  mySerial.println("AT+CGATT=1");
  updateSerial();
  delay(2000);
  mySerial.println("AT+CSTT=\"internet\",\"\",\"\"");
  updateSerial();
  delay(2000);
  mySerial.println("AT+CIICR");
  updateSerial();
  delay(2000);
  mySerial.println("AT+CIFSR");
  updateSerial();
  delay(2000);
  mySerial.println("AT+CIPSTART=\"TCP\",\"184.106.153.149\",80");
  updateSerial();
  delay(2000);
  mySerial.println("AT+CIPSEND=105");
  updateSerial();
  delay(2000);
  mySerial.print("GET https://api.thingspeak.com/update?api_key=A6GJ4O185NOC9CZ1&field1=");
  mySerial.print(bodyTemp.toFloat());
  mySerial.print("&field2=");
  mySerial.println(BPM.toInt());
  updateSerial();
  delay(1000);
  mySerial.write(26);
  updateSerial();
  delay(2000);

  //buzzer alert and GSM call if data is abbormal
if(BPM.toInt() < 60 || BPM.toInt() > 100 || bodyTemp.toFloat() < 36.5 || bodyTemp.toFloat() > 37.2){
  int condition = 1;
switch(condition){
case 1:
  mySerial.println("ATD+255788535588"); //  change ZZ with country code and xxxxxxxxxxx with phone number to dial
  updateSerial();
  digitalWrite(buzzerPin, HIGH);
  delay(1000);
  digitalWrite(buzzerPin, LOW);
  break;
  }
 }
}
delay(1000);
}
//hii function imeibwa kama ilivyo jajaja:)
String getValue(String data, char separator, int index)
{
    int found = 0;
    int strIndex[] = { 0, -1 };
    int maxIndex = data.length() - 1;

    for (int i = 0; i <= maxIndex && found <= index; i++) {
        if (data.charAt(i) == separator || i == maxIndex) {
            found++;
            strIndex[0] = strIndex[1] + 1;
            strIndex[1] = (i == maxIndex) ? i+1 : i;
        }
    }
    return found > index ? data.substring(strIndex[0], strIndex[1]) : "";
}

void updateSerial(){
  delay(10);
  
  while (Serial.available())
  {
    mySerial.write(Serial.read());//Forward what Serial received to Software Serial Port
  }
  while(mySerial.available()) 
  {
    Serial.write(mySerial.read());//Forward what Software Serial received to Serial Port
  }
}
