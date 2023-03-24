import { useParams, Link } from "react-router-dom";

function Color({color}) {
  return (
    <div className="color" style={{ backgroundColor: color.hex }}>
      <p>{color.name}</p>
      <p>{color.color}</p>
      {console.log(color)}
      <Link to="/colors">Go Back</Link>
    </div>
  )
}

export default Color