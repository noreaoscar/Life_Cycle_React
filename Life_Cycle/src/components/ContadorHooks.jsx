import { useState } from "react";



const ContadorHooks = ()=>{

const [count, setCount] = useState(0) ;

const add = ()=>{
    setCount(count + 1)
}

    return (
        <>
            <p>{count}</p>
            <button onClick={add}>Add</button>
        </>
    )
}

export default ContadorHooks; 