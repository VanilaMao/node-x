## Section 1 ---Architecture
  
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




## Section 2 -- Improvement and Thinking
  ## Logging/Monitoring
    A. Usually Splunk/DataDog is the choice for business, since this is a project with open and free library, winston is selected
    B. Logging Setting can be customized from config file and then set up it in the logging module, so that a new settings can be appliedwithout modifying code.
    
  ## Testing
   A. E2E testing is missing at this point, it is very useful in real project
   B. need more unit tests and code coverage test
   
  ## Error/Exception handling
    At this point, exception handling is missing which is very valuable in real project, for complexity business model, 
    error code system is also valuable
    
  ## Authentication/Authorization
    Security is missing for now to reduce complexity, but it is mandatory in a real project
    
  ## Validation
    Validation is missing (such as validate size range from 1-5 etc) is missing for simplefying solution, but it is good
    for user experenience and a robust system 
    
  ## Front End
    Front End could be much better, since this question is more focused on backend, UI is just a tool to test the solution
    
