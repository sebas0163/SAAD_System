#include <WiFi.h>
#include <WebServer.h>
#include <DFRobot_MAX30102.h> //Biblioteca utilizada par la medición de pulsos.

DFRobot_MAX30102 particleSensor;
const char* ssid = "Familia Monge"; // Reemplazar nombre del WiFi
const char* password = "manzana1234"; // Contraseña de la red WiFi

WebServer server(80); //puerto que se está usando

// Variables para pulsaciones y oxigenación
int pulsaciones = 0;
int oxigenacion = 0;

const byte RATE_SIZE = 4; //decimales
byte rates[RATE_SIZE]; //Array de pulsaciones
byte rateSpot = 0;
long lastBeat = 0; //Tiempo del ultimo latido

float beatsPerMinute; // Pulsaciones por minuto
int beatAvg; //Promedio de pulsaciones

void setup() {
  Serial.begin(115200); // Frecuencia del Serial
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Conectando a WiFi...");
  }
  Serial.println("Conectado a WiFi");
  Serial.println(WiFi.localIP()); // Imprimir dirección IP

  server.on("/data", HTTP_GET, []() {
    String json = "{\"pulsaciones\": "+ String(pulsaciones) + ", \"oxigenacion\":"+String(oxigenacion)+"}"; // Simulación de datos
    server.send(200, "application/json", json);
  });

  server.begin();
  //Verifica la conexion con el sensor
  while (!particleSensor.begin()) {
    Serial.println("MAX30102 was not found");
    delay(1000);
  }
  // Funcion que configura el sensor
  particleSensor.sensorConfiguration(/*ledBrightness=*/50, /*sampleAverage=*/SAMPLEAVG_4, \
                        /*ledMode=*/MODE_MULTILED, /*sampleRate=*/SAMPLERATE_100, \
                        /*pulseWidth=*/PULSEWIDTH_411, /*adcRange=*/ADCRANGE_16384);

}
//Variables Globales donde se almacenan lo dato
int32_t SPO2; //SPO2
int8_t SPO2Valid; //Bandera que indica si el valor es valido
int32_t heartRate; //Heart-rate
int8_t heartRateValid; //Bandera que indica si el valor es valido

void loop() {
  server.handleClient();
  getData();
}
/**
Función que toma las muestras del sensor y las muestra en el plot.
*/
void getData(){
  Serial.println(F("Wait about four seconds"));
  particleSensor.heartrateAndOxygenSaturation(/**SPO2=*/&SPO2, /**SPO2Valid=*/&SPO2Valid, /**heartRate=*/&heartRate, /**heartRateValid=*/&heartRateValid);
  pulsaciones = heartRate;
  oxigenacion = SPO2;
  // Visualizacion de datos
  Serial.print(F("heartRate="));
  Serial.print(heartRate, DEC);
  Serial.print(F(", heartRateValid="));
  Serial.print(heartRateValid, DEC);
  Serial.print(F("; SPO2="));
  Serial.print(SPO2, DEC);
  Serial.print(F(", SPO2Valid="));
  Serial.println(SPO2Valid, DEC);
}
