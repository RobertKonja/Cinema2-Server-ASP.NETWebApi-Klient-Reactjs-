import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeMovie from "./changemovie.jsx";


export default class Movie extends Component{
  

     
   state ={

      localhost   : "localhost:54820" ,
      
      button : "ADD NEW ", 
      edit : false,
      movies: [],
      movie :{},
      directors:[],
      body :[ ],
      selectedDirectorId : 1 ,
      bingo:false ,
      
      Id:0 ,
      Name:'',
      Genre :'',
      Year :'',
      DirectorId :null,


   };
 
   async componentDidMount(){
     
     const url =`http://${this.state.localhost}/api/movies/`;
     const result = await fetch(url);
     const data = await  result.json();
     console.log(data);
     this.setState({movies: data}) ;
     const url2 =`http://${this.state.localhost}/api/directors/`;
     const result2 = await fetch(url2);
     const data2 = await  result2.json();
     console.log("load directors",data2);
     this.setState({directors: data2}) ;
     
    };
    
    handleChange = (e)=> {
 
         const el = e.target.name ;
         const  value = e.target.value ;
         this.setState({[el] : value});
         
 
       console.log('handle change called')
     }
     handleSelect = (e)=>{
    
      const  value = e.target.value ;
      this.setState({DirectorId : value});
     }
  
      reloadPage=()=>{
        const request = {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: { 'Content-Type': 'application/json' },
         
              }
        fetch(`http://${this.state.localhost}/api/movies/`,request).then(res => res.json())
        .then(
          (result) => {
            this.setState({
              movies : result,
              Id:0 ,
              Name:'',
              Genre :'',
              Year :'',
              DirectorId :null,   
            });
          },
          
          (error) => {
            this.setState({
               loading: true,
              error
            });
          }
        );

      }
          refreshPage = (id) => {
          // in server side is have deleted (SQL database),this is only for table refrech in the klijent side 
          const newmovies = this.state.movies.filter((movie) => movie.id !== id);
          this.setState({movies:newmovies}) ; 
        }

         getMovie = (e) => {
               const id = e.target.id ;
               fetch(`http://${this.state.localhost}/api/movies/${id}`)
                 .then(res => res.json())
                 .then(
                   (result) => {
                     this.setState({
                       edit: true,
                       movie: result,
                       Id: id,
                       button : "UPDATE",
                       selectedDirectorId : result[0].DirectorId
                     });
                   },
                   (error) => {
                     this.setState({
                        loading: true,
                       error
                     });
                   }
                 )
             
            console.log('activate get movie')  ;
    }
    deleteMovie=(e)=>{
      const id = e.target.id ;
      const url = `http://${this.state.localhost}/api/movies/${id}`;
      const request = {
                        method: "DELETE",
                        mode: "cors",
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers: { 'Content-Type': 'application/json' },
                      
                       }
              fetch(url,request)
              .then(res => res.json())
              .then(           
              () => this.reloadPage(),
            // () => this.refreshPage(id),NOT WORK
              (error) => {
              this.setState({
              loading: true,
              error
                           }            
                         
                           );
                           }
              );
            
}
     submitMovie = (e) =>{
       e.preventDefault();
      console.log("activate submit movie ");
      let body1,method,url;
        if(this.state.edit)
                {    
                    body1 ={
                      Id:this.state.Id,
                      Name:this.state.Name,
                      Genre : this.state.Genre,
                      Year:this.state.Year,
                      DirectorId :this.state.DirectorId
                           }
                  method = "PUT";
                  url = `http://${this.state.localhost}/api/movies/${this.state.Id}`;
                }
                else{ 
                      body1 ={                        
                      Name:this.state.Name,
                      Genre : this.state.Genre,
                      Year:this.state.Year,
                      DirectorId :this.state.DirectorId
                            }
                  method = "POST";
                  url = `http://${this.state.localhost}/api/movies/`;
                    }
          console.log("insade if ",body1,url);
              const request = {
                          method: method,
                          mode: "cors",
                          cache: "no-cache",
                          credentials: "same-origin",
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(body1)
              }
          fetch(url,request).then(res => res.json())
          .then(
            () => this.reloadPage(),
            (error) => {
              this.setState({
                 loading: true,
                error
              });
            }
          );
          
    }
  
   render(){
        return(
                 <div>  
                    <div  className="container">  
                    <table className="  table table-bordered" >
                       <thead>
                             <tr> 
                                <th> Movie Id</th>
                                <th>  Name</th> 
                                <th>Genre </th>
                                <th> Relase year</th>
                                 <th> Director </th> 
                                 </tr>

                       </thead>
                       <tbody>   

                          {this.state.movies.map(m => (
                              <tr  key= {m.Id}>
                                 <td> {m.Id}</td>
                                 <td>  {m.Name}</td>
                                 <td>{m.Genre} </td>
                                 <td> {m.Year} </td>
                                 <td> {m.Director.Name} </td>
                                 <td><button className="btn btn-primary"    onClick={this.getMovie}  id = {m.Id}     >  EDIT  </button>  </td>
                                 <td><button className="btn btn-primary"    onClick={this.deleteMovie}  id = {m.Id}     >  DELETE </button>  </td>
                              </tr>  
                                                       ))}
                       </tbody>
                      
                      </table>
                      </div>

                          <div>
                             
                              <ChangeMovie 
                               object = {this.state.movie}  
                               change={(this.handleChange)}
                               submitMovie={this.submitMovie}  
                               button={this.state.button} 
                               dropdown={this.state.directors} 
                               select = {this.handleSelect}
                               directorId ={this.state.selectedDirectorId}
                                        />
                                 
                              
                            </div>
                           
                 </div>

        );

   }

  }