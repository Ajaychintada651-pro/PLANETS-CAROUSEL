import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {imageUrl, id, name, description} = planet
  return (
    <div className="planet-item">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
