# Web Technologien // begleitendes Projekt Sommersemester 2021

Zum Modul Web Technologien gibt es ein begleitendes Projekt. Im Rahmen dieses Projekts werden wir von Veranstaltung zu Veranstaltung ein Projekt sukzessive weiter entwickeln und uns im Rahmen der Veranstaltung den Fortschritt anschauen, Code Reviews machen und Entwicklungsschritte vorstellen und diskutieren.

Als organisatorischen Rahmen für das Projekt nutzen wir GitHub Classroom. Inhaltlich befassen wir uns mit der Entwicklung einer kleinen Web-Anwendung für die Bearbeitung von Bildern. Hierbei steht weniger ein professioneller Konzeptions-, Entwurfs- und Entwicklungsprozess im Vordergrund, sondern vielmehr die sukzessive Weiterentwicklung einer Anwendung, das Ausprobieren, Vergleichen, Refactoren und die Freude an lauffähigem Code.


Diese Anwendung kann mit oder ohne Docker verwendet werden.

### Entwicklungsumgebung (mit Docker)
Wenn Sie Docker nicht installiert haben, [installieren Sie es von hier](https://docs.docker.com/get-docker/).

### Einrichtung (mit Docker)
1. Сlonen Sie dieses Repository. 
2. Öffnen Sie Ihr Terminal und **cd** in das Verzeichnis des Repositorys.
3. Führen Sie den folgenden Befehl aus, um ein Image zu erstellen:
```
docker build
```

### Start (mit Docker)
1. Starten Sie Ihr Image als Container
```
Docker run 
```
2. Besuchen Sie Ihre Anwendung in einem Browser unter http://localhost:3000/.
3. Stoppen Sie den laufenden Container
```
docker stop 
```
### Entwicklungsumgebung (ohne Docker)
Wenn Sie Node.js nicht installiert haben, [installieren Sie es von hier](https://nodejs.org/en/).
Sie benötigen Node.js Version 10.13 oder höher.

### Einrichtung (ohne Docker)
1. Сlone dieses Repository. 
2. Öffnen Sie Ihr Terminal und **cd** in das Verzeichnis des Repositorys (client & server).
3. Führen Sie den folgenden Befehl aus, um npm-Pakete einzurichten:
```
npm install
```
 ### Häufig verwendete npm-Skripte
App im Entwicklungsmodus starten
```
npm start
```
