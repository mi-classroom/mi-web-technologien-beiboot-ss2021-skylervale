# Web Technologien // begleitendes Projekt Sommersemester 2021

Zum Modul Web Technologien gibt es ein begleitendes Projekt. Im Rahmen dieses Projekts werden wir von Veranstaltung zu Veranstaltung ein Projekt sukzessive weiter entwickeln und uns im Rahmen der Veranstaltung den Fortschritt anschauen, Code Reviews machen und Entwicklungsschritte vorstellen und diskutieren.

Als organisatorischen Rahmen für das Projekt nutzen wir GitHub Classroom. Inhaltlich befassen wir uns mit der Entwicklung einer kleinen Web-Anwendung für die Bearbeitung von Bildern. Hierbei steht weniger ein professioneller Konzeptions-, Entwurfs- und Entwicklungsprozess im Vordergrund, sondern vielmehr die sukzessive Weiterentwicklung einer Anwendung, das Ausprobieren, Vergleichen, Refactoren und die Freude an lauffähigem Code.


Diese Anwendung kann mit oder ohne Docker verwendet werden.

### Development environment (with Docker)
If you do not have Docker installed, [install it from here](https://docs.docker.com/get-docker/).

### Setup (with Docker)
1. Сlone this repository.  
2. Open your terminal and **cd** into the repository directory.
3. Run the following command to create an image:
```
docker build
```

### Start (with Docker)
1. Start your image as a container
```
Docker run 
```
2. Visit your application in a browser at http://localhost:3000/.
3. Stop the running container
```
docker stop 
```
### Development environment (without Docker)
If you do not have Node.js installed, [install it from here](https://nodejs.org/en/).
Sie benötigen Node.js Version 10.13 oder höher.

### Setup (without Docker)
1. Сlone this repository. 
2. Open your terminal and **cd** to the directory of the repository (client & server).
3. Run the following command to set up npm packages:
```
npm install
```
 ### Frequently used npm scripts
Launch app in development mode on both client and server side.
```
npm start
```
