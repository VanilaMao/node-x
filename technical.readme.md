## Architecture
  
  ## Main Technology
      
   As scalability, maintainability, testable, reliability are required, additionally, 
stockx is a real-time data virtualization system, so a CQRS +ES server is a potential solution for horizontal scale and    maintainability.  Since the database is PostgreSQL, for maintainability purpose, an ORM is much easier to maintain and design. Also, 
in order to minimize possible bugs and team’s cooperation, typescript is very useful. So a CQRS Node Js framework (NestJs) + TypeORM is the most reasonable technology to implement real-time, scalable, maintainable project in Node Js

   
  ## Flexablity
   
       ## Environment settings
   In order to decouple environment settings( application launch url port, database connection setting,  development environment settings)
 and modify settings in deployment time dynamically, an environment module is created to support environment variable schema definition 
 and pick up values from deployment time, convict library is a good choice to implement it, in order to separate the concerns, a injectable EnvConfigService and env module can decouple environment settings from other modules
 
       ## Database Connection
 
  the Db module hide all the implement details inside, decouple connection string and specific database from other modules, and the database connection is configured dynamically with the EnvConfigService in deployment time. From other modules connecting database, just use uniformed repository interface to access database. Also, TypeORM is a good library to support 
schema and entity relationship definition 
   
      ## Logging
  In order to log info in server with a generic logging without knowledge of underlying implementation, a logging module wrapped winston library is implemented, with it, other module just need to inject the dependency with a generic 'stockx' logging service.
