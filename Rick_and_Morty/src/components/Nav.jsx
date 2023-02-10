import React from "react";
import SearchBar from "./SearchBar";
import Styles from "./assets/Nav.module.css"
class Nav extends React.Component{
    constructor(props){
        super(props)
    }


render(){
    return (
        <>
        <div className={Styles.navContainer}>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
        </>
    )
}
}

export default Nav; 