import React from "react";

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
                            <h3>{user.name}</h3>
                            <h4>{user.email}</h4>
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