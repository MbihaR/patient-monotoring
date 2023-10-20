// Calculate based on max input size expected for one command
#define INPUT_SIZE 30

// Get next command from Serial (add 1 for final 0)
char input[INPUT_SIZE + 1];

String BPM = "";
String tempValue = "";
String Data = "";

  // Read each command pair 

void setup() {
  Serial.begin(38400); // Default communication rate of the Bluetooth module
}
void loop() {
 while(Serial.available() > 0){ // Checks whether data is comming from the serial port
    char command = Serial.read(); // Receive a single character from the software serial port
        
       Data.concat(command); // Add the received character to the receive buffer
 }
 BPM = getValue(Data,':',0);
 tempValue = getValue(Data,':',1);
 
 Serial.println(BPM);
 Serial.println(tempValue);
 
 Data = "";
 delay(100);  
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
