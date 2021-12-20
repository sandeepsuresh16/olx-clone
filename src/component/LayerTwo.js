import React,{useContext} from 'react'
import {AppContext} from '../AppContext'
function LayerTwo() {
    const {data} = useContext(AppContext)
    return (
        <div style={{backgroundColor:'green',width:"100px"}}>
            <h4>layer two {data}</h4>
            
            
        </div>
    )
}

export default LayerTwo
