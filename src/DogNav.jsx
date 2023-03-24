import { Link } from 'react-router-dom';
function DogNav({dogs}) {
    return (
        <nav>
        <ul>
            {dogs.map((dog) => (
            <li>
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
            </li>
            ))}
        </ul>
        </nav>
    );
}

export default DogNav;