import React from "react";
import { Link } from "react-router-dom";

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            
            users:[]
        }
       
    
    }
    
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>history.setState({users: data}))
    .catch(err=>console.log(err))
}
    render(){
        return(
            <>
            <h3>Users Components</h3>


            {
                this.state.users.map((user)=>{
                    return(
                        <div key={user.id}>
                            <Link to="">
                            <h3>{user.name}</h3>
                            </Link>
                           <Link to="">
                           <h4>{user.email}</h4>
                           </Link>
                            
                            <hr /> 
                        </div>
                    )
                })
            }
            </>
        )

    }
}

export default Users; 