import React from "react"; 
import styles from "./Contador.module.css"

class Contador extends React.Component{
    constructor(props){
        super(props)

        this.state = { //El estado si o sí debe llamarse this.state
            count:0,
            text: "",
            mode: true,
            textLeft: false,
            textCenter: true,
            textRight: false,
            
        } 
        

    }

add= ()=>{

    this.setState({
        count: this.state.count + 1, 
        text: " Adding"
    }, ()=> console.log(this.state.count))
}

reset= ()=>{
    this.setState({
        count: this.state.count = 0,
        text: "Reset"

    }, console.clear())
}

subtract= ()=>{
    if(this.state.count !== 0){
    this.setState({
        count: this.state.count - 1,
        text:"subtracting"
       
    }, ()=> console.log(this.state.count))
}else console.error("No hay valores para restar");
}

 toggle =()=>{
    this.setState({mode:!this.state.mode})
}

leftText=()=>{
    this.setState({
        textLeft: true,
           textCenter: false,
           textRight: false,
    })
}

rightText=()=>{
    this.setState({
        textLeft: false,
           textCenter: false,
           textRight: true,
    })
}

centerText=()=>{
    this.setState({
        textLeft: false,
           textCenter: true,
           textRight: false,
    })
}




componentDidMount(){
    console.log("Soy el componente me monté");
}


componentDidUpdate(){
    console.log("Soy el componente, me actualicé");
}

componentWillUnmount(){
    console.log("Me estoy desmontando");
}

    render(){
        return (
            <>
                <h3>Example</h3>
                <p>{this.state.count}</p>
                <p>{this.state.text}</p>
                <div>
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.subtract}>subtract</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
                <div className={styles.container}>
                     <div className={this.state.mode ? styles.light : styles.dark}>
                        {this.state.mode ? "LIGHT" : "DARK"}
                     </div>
                </div>

                <label class={styles.switch}>
                <input type="checkbox" onClick={this.toggle} />
                <span class={styles.slider}></span>
                </label>


                <div className={styles.textButtonContainer}>
                    <button onClick={this.leftText} className={`${styles.leftButtonDark} ${styles.textButton} ${styles.buttonsHover}`}></button>
                    <button onClick={this.centerText} className={`${styles.centerButtonDark} ${styles.textButton} ${styles.buttonsHover}`}></button>
                    <button onClick={this.rightText} className={`${styles.rightButtonDark} ${styles.textButton} ${styles.buttonsHover}`}></button>
                </div>
                
                <div>
                    
                    <p className={`${this.state.textLeft ? styles.textLeft : ""} ${this.state.textCenter ? styles.textCenter : ""} ${this.state.textRight ? styles.textRight : ""}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel omnis id ullam aliquid obcaecati animi laudantium asperiores, vitae ipsum! Voluptates quisquam consequatur fugiat saepe et mollitia aliquam eum ipsa corrupti!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate atque ratione rerum. Odio ab, eaque et nobis, nisi voluptatum alias accusantium illo non ipsum facere adipisci. Optio dolorem consequuntur porro.</p>
                </div>
            </>

        )
    }
}

export default Contador;


