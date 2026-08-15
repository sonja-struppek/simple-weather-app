# Wetter-App 🌦️

Eine einfache Wetter-App, die aktuelle Wetterdaten über die OpenWeatherMap API abruft.  
Erstellt mit **HTML**, **CSS** und **JavaScript**.

---

## 🔑 API-Key erforderlich

Um die App nutzen zu können, benötigst du einen **eigenen API-Key** von OpenWeatherMap.

### So erhältst du deinen API-Key:

1. Registriere dich kostenlos unter https://openweathermap.org/
2. Öffne dein Dashboard
3. Erstelle einen neuen API-Key

### So bindest du den API-Key ein:

1. Lege im Projektordner eine Datei **`config.js`** an  
2. Füge folgenden Inhalt ein:

```js
const apiKey = "DEIN_API_KEY_HIER";
```

🚀 Projekt starten:

Es ist kein Backend und keine Installation notwendig.

1. Lade das Repository herunter oder klone es
2. Erstelle die Datei config.js wie oben beschrieben
3. Öffne index.html im Browser

📁 Projektstruktur:

index.html      → Hauptseite der App
style.css       → Styling und Layout
script.js       → JavaScript-Logik (API-Abfrage, UI-Update)
config.js       → API-Key (muss lokal erstellt werden)
images/         → Icons für Wetterdarstellung

