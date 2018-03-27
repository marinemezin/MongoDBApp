# MongoDBApp

## How to install our application ?
Go into our application folder and enter this two command lines : 
* npm install
* npm install express
* npm install mongodb
These commands will install all necessary packages needed to start our application.

In a new terminal, go into the folder “bin” of MongoDB. Your path should look like this : “C:\Program Files\MongoDB\Server\3.6\bin”

Import data into MongoDb : mongoimport --db dblp --collection publis “PATH”\DBLP_clean.json


## How to start our application ? 
In a new terminal, go into the folder “bin” of MongoDB. Your path should look like this : “C:\Program Files\MongoDB\Server\3.6\bin”
Enter : mongod.exe

In a new terminal, go into the folder of our project

Enter : node app.js
Now your application just started ! 
Go in your browser and write localhost:3000 (if you didn’t change the port)
