/********************************************************************/
// First we include the libraries
#include <OneWire.h> 
#include <DallasTemperature.h>
#define USE_ARDUINO_INTERRUPTS true    // Set-up low-level interrupts for most acurate BPM math.
#include <PulseSensorPlayground.h>     // Includes the PulseSensorPlayground Library. 
/********************************************************************/
// Data wire is plugged into pin 2 on the Arduino 
#define ONE_WIRE_BUS 4
/********************************************************************/
// Setup a oneWire instance to communicate with any OneWire devices  
// (not just Maxim/Dallas temperature ICs) 
OneWire oneWire(ONE_WIRE_BUS); 
/********************************************************************/
// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature tempSensor(&oneWire);
/********************************************************************/ 
/****************pulse sensor variables*******************************/

//  Variables
const int PulseWire = A0;       // PulseSensor PURPLE WIRE connected to ANALOG PIN 0
const int LED13 = 13;          // The on-board Arduino LED, close to PIN 13.
int Threshold = 550;           // Determine which Signal to "count as a beat" and which to ignore.                              
float myBPM=50;                               
PulseSensorPlayground pulseSensor;  // Creates an instance of the PulseSensorPlayground object called "pulseSensor"            

/***********************************for temperature subsystem**********************************************/
float tempValue = 0;

void setup() {

Serial.begin(38400); // Default communication rate of the Bluetooth module
tempSensor.begin(); 

pinMode(LED13, OUTPUT);

// Configure the PulseSensor object, by assigning our variables to it. 
  pulseSensor.analogInput(PulseWire);   
  pulseSensor.blinkOnPulse(LED13);       //auto-magically blink Arduino's LED with heartbeat.
  pulseSensor.setThreshold(Threshold);   
  
  // Double-check the "pulseSensor" object was created and "began" seeing a signal. 
   if (pulseSensor.begin()) {
    Serial.println("Pulse sensor initialized!");  //This prints one time at Arduino power-up,  or on Arduino reset.  
  }
}

void loop() {
 
/************************************pulsse sensor**************************************************/
int myBPM = pulseSensor.getBeatsPerMinute();  
/***********************************read temperature -- DS18B20*************************************/
 tempSensor.requestTemperatures(); // Send the command to get temperature readings
 tempValue = tempSensor.getTempCByIndex(0);
/********************************sending the results to receiver****************************************/
if (pulseSensor.sawStartOfBeat()) {            // Constantly test to see if "a beat happened"
 //check for corrupt data and filter it
  if(tempValue == -127.00 || tempValue == 85.00){
  //do nothing
  }
  else{
    //send results to receiver
      //Serial.println("\n");
      Serial.print(myBPM); // Sends BPM data
      Serial.print(":");
      Serial.print(tempValue); // Sends temperature data
      Serial.println("\n");
      delay(20);
  }
}
delay(1000); // take a break. 
}
