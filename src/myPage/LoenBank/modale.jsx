import React from 'react'

export default function Modale({ isVesible, messageInfo = "no message", mesageState }) {
    if (isVesible) {
        return (
            <div style={{ backgroundColor: "#1d1414c4" }} className='d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0'>
                <div className='container bg-light shadow-lg rounded'>
                    <h1 style={mesageState === "good" ? { color: "rgb(19, 215, 15)" } : { color: "red" }}>{messageInfo}</h1>
                </div>
            </div>
        )
    } else {
        return <></>
    }

}
