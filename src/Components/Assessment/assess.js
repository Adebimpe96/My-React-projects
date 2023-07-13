const Assessment = () => {

    const planets = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: true},
        {name: "Jupiter", isGasPlanet: false},
        {name: "Venus", isGasPlanet: true},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: false},
    ];
     
    return ( 
        <div>
        {planets.map((planet,keys) => planet.isGasPlanet && <h1>{planet.name}</h1>
        )}  
        </div>
     );
}
 
export default Assessment;