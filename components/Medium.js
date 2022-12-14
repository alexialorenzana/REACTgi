import React from "react";
class BasicInfo extends React.Component{
 constructor(props){
  super();
  {/* Hard Challenge*/}
  this.state = {person: [
    {id: 1, name: "Aida Arias", age: '24', dob: '09-07-1998'},
    {id: 2, name: "Maria Lorenzana", age: '20', dob: '03-18-2002'}, 
    {id: 3, name: "Matthew Lorenzana", age: '16', dob: '05-15-2006'}, 
    {id: 4, name: "Carlos Lorenzana", age: '28', dob: '09-28-1994'},   
    {id: 5, name: "KyloRen Lorenzana", age: '3', dob: '02-02-2019'} 
  ]
  }
}


  render(){
    return (
      <div className ="me"> {/* Medium Challenge */}
   name: {this.props.info.person.name} <br></br>
   age: {this.props.info.person.age} <br></br>
   dob: {this.props.info.person.dob} <br></br>

      <div className="favs"> {/* Hard Challenge */}
        <ul>
          {this.state.person.map(d => (<li key={d.id}> 
          name: {d.name} <br></br>
          age: {d.age} <br></br>
          dob: {d.dob}
          </li>))}
        </ul>
      </div>
      </div>

    )
    }
  }

export default BasicInfo;


