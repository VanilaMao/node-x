## Run the whole application Locally:
   1. Install prequisition software Docker, if Docker is installed, skip this step
   2. go to the root folder which containing the Docker-compose-dev.yml file
   3. run docker-compose with command: docker-compose -f docker-compose-dev.yml up --build --force-recreate
        ,if no logging is needed, use command: docker-compose -f docker-compose-dev.yml up --build --force-recreate -d
      
 ## Url for Apps
   A. Node Js Server: localhost:5000 
   
   B. Front End: localhost:4500
   
 ## PostGreSQL DB
    A. Host url: localhost:5500 
    B. user:"root", password:"stockx", database:"stockX"
    please use above infomation to manage database via PgAdmin tool
    
  ## Ports:
   All the ports has been set in the env.config.ts (schema file) and environment file( such as development.json) in the node-api project based on development, and the docker file can overwrite the ports considering environment.
   
   
  ## Dockfile
   docker-compose-dev.yml defines the database, backend, frontend realationships and environment settings. 
   Dockfile in both front-end and node-api projects defines the according builds
   
  ## Swagger
     A: Url: localhost:5000/api
   
  ## Usuage
      A. Open the frontend url (localhost:4500)
      B. Input an shoes name in the textbox and click create button
      c. A new inventory item will show in the list above
      d. Click the Edit button on any inventory item in the list and an edit panel will show
      e. input a size collection in the trueToSize textbox, the format is like this:1,2,3,4
      f. click save button in the edit panel, and the trueToSize will get updated via calcualtion in the backend
      
  ## Technical part discussion, please review it in the technical.readme file.
   
   
   
   
       
