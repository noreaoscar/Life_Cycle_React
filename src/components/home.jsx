import React from "react"; 
import Contador from './Contador'
import ContadorHooks from "./ContadorHooks";

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <h1>Counter</h1>
                <Contador/>
                <hr />
                <h2>Counter(Hooks)</h2>
                <ContadorHooks />
            </>

        )
    }
}

export default Home;