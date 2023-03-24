function Dog({ dog }) {
    return (
        <div>
        <h2>{dog.name}</h2>
        <img src={dog.src}/>
        <ul>
        {dog.facts.map((fact, i) => <p key={i}>{fact}</p> )}
        </ul>
        </div>
    );
}

export default Dog;