#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "Familia Monge"; // Reemplaza con tu SSID
const char* password = "manzana1234"; // Reemplaza con tu contraseña

WebServer server(80);

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Conectando a WiFi...");
  }
  Serial.println("Conectado a WiFi");
  Serial.println(WiFi.localIP()); // Imprimir dirección IP

  server.on("/data", HTTP_GET, []() {
    String json = "{\"pulsaciones\":75, \"oxigenacion\":98}"; // Simulación de datos
    server.send(200, "application/json", json);
  });

  server.begin();
}

void loop() {
  server.handleClient();
}
