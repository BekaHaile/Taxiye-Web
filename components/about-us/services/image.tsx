import * as React from "react"

function Device({url}) {
    return (
    <>
        <img src={`${process.env.NEXT_PUBLIC_HOST}${url}`}/>
    </>
        )
    }
    
    
    

export default Device
