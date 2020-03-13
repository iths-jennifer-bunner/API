
const renderPlanetInfo = () => {
    fetch ('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(planets => {        
    const data = planets.results
    let i = 0
    data.forEach((planet) => {
        i++
        let link = document.createElement('a')
        link.textContent = i + ' '
        document.querySelector('.links').append(link)
        link.addEventListener('click', () => {
            let planetName = document.createElement('h2')
            planetName.textContent = planet.name
            let info= document.createElement('p')
            info.textContent = 'Climate: '+ planet.climate +', Population: ' + planet.population+  ', Appears in ' + planet.films.length + ' movies(s).'            
            const infoElement = document.querySelector('.infos')
            infoElement.innerHTML = ''
            infoElement.appendChild(planetName)
            infoElement.appendChild(info)
            
        })            
        })
    })            
    .catch(err => {
        console.error(err.message);        
    })
}
renderPlanetInfo()

