# Redis Cache and Static Image Access
1.	The application is built using Node.js and Express module.
2.	The application will run on http://localhost:3000 address
3.	<b>PreRequisites</b> – <br>
  &nbsp;a.	Navigate to the “Redis_Cache” folder in command prompt and run the following commands <br>
  &nbsp;&nbsp;&nbsp;&nbsp;i.	npm install <br>
  &nbsp;&nbsp;&nbsp;&nbsp;ii.	bower install <br>
  &nbsp;b.	The following commands above will install all the necessary packages <br>
  &nbsp;c.	Install Redis-x64-3.0.504.zip for Windows or appropriate package for your OS and unzip the folder. <br>
  &nbsp;d.	The folder should contain “redis-server.exe”. Go to the command line, navigate to the directory and type redis-server.exe and press       Enter/Return. The server should be running before you proceed with Step 6. <br>
4.	In a new command prompt navigate to the “/Rdis_Cache /bin folder and run the following command to run the application <br>
  A. node www(Please do not modify the file) <br>
5. Open a new CMD prompt, navigate to Redis directory and type the commands- "INFO keyspace". You can see no keys are added.
6. The JavaScript code sends a request to the getImage API with image ID and populates the response in HTML.
7. Get Image API checks first Redis Cache for the image. If not present, then queries Mongo DB.
8. On running the application, the Redis Server and Mongo DB is connected. Once connected you can type INFO in redis-cli.exe prompt to see number of connected clients.
9. When you open http://localhost:3000 , you can see only buttons on the webpage
10. Click on one of the buttons once.
11.	When you click on one of the buttons the data first loads from Mongo DB as the key is not present in Redis Cache. 
The button click will also store a key in Redis cache. This can be verified using the command - "INFO keyspace"
12. The speed of image loading improves using Redis Cache
