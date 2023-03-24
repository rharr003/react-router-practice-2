import Color from "./Color";
import ColorForm from "./ColorForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function ColorList({colors}){
    return(
        <div>
            {colors.map(color => <Link to={`/colors/${color.name}`}>{color.name}</Link>)}
        </div>
    )
}

export default ColorList;