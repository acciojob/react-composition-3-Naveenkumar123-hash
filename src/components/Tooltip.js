import React from "react";
import { useState } from "react";

const Tooltip=({children,text})=>{

    const [visible,setVisible]=useState(false)

    return (
        <div>
            <div className="tooltiptext">
            {visible && <span>{text}</span>}
            </div>
            <div className="tooltip">
            <h2 onMouseEnter={()=>(
                setVisible(true)
            )} onMouseLeave={()=>(
                setVisible(false)
            )}>{children}</h2>
            </div>

        </div>
    )
}

export default Tooltip;