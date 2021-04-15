## Cinema2-Server-ASP.NETWebApi-Klient-Reactjs-
## Practicing basic CRUD operations with fetch request in ReactJs and ASP.NET Web API  endpoints.

##-Open Cinema2Server  folder in
- Visual Studio 2019


During installation it is necessary to:\
enable => NuGet Package Manager => restore (automatically appears only to confirm restore).\
-The project uses a local SQL database.\
-Open: Tools => Nuget Package manager => Package Manager Console => type:\
1.add-migration (name as desired)\
2.update-database\
Entity Framework creates a database (Cinema) with tables\

Use this  as a server, when the application is launched\
copy the url address into the Visual studio code  ( expl.=>  Http://localhost:54820)\
Leave the running application in the background \                                             
                                                                                              
##-Open   Cinema2Klient  folder in                                                           
-Visual Studio Code                                                                          
Open 'src'  folder    => then open ' Components ' folder  =>  in   'movie.jsx'  Change      
                                                                                              
state ={                                                                                      
     localhost   : "localhost:54820" , <=====change this  ================<<<                                              
     }\
     
 Run  Visual code ,terminal typing  :- npm install    
                           then     -  npm start   
 
 
