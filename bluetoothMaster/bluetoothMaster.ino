
void setup() {
  Serial.begin(38400); // Default communication rate of the Bluetooth module
}
void loop() {
 if(Serial.available() > 0){ // Checks whether data is comming from the serial port
    //state = Serial.read(); // Reads the data from the serial port
    //Serial.println(Serial.read());
 }
 int BPM = 86;
 Serial.println(BPM); // Sends potValue to servo motor

 Serial.println(":");

 float tempValue = 23.90;
 Serial.println(tempValue);
 delay(100);
}
