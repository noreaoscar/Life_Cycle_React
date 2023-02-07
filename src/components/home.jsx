import React from "react"; 
import Contador from './Contador'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <h1>Examples</h1>
                <Contador/>
            </>

        )
    }
}

export default Home;