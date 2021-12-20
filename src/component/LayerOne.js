import React from 'react'
import LayerTwo from './LayerTwo'

function LayerOne() {
    
    return (
        <div style={{backgroundColor:'red', width:"200px"}}>
            <h1>Layer One</h1>
            <LayerTwo></LayerTwo>
        </div>
    )
}

export default LayerOne
