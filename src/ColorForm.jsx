import { render } from "@testing-library/react";
import { useState } from "react"
import { useNavigate  } from "react-router-dom";

function ColorForm({addColor}) {
    const [color, setColor] = useState({name: "", color: ""})

    const redirect = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
        redirect("/colors");
        
    }

    function HandleChange(e){
        setColor(color => ({...color, [e.target.name]: e.target.value}));
    }


    return (
        <form>
        <input type="text" name="name" onChange={HandleChange} placeholder="name of color" value={color.name}/>
        <input type="color" name="hex" onChange={HandleChange} required />
        <button type="submit" onClick={handleSubmit}>ADD</button>
        </form>
    )


    }

export default ColorForm;