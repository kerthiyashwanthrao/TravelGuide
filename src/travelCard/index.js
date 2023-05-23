import './index.css'

const Card = props => {
  const {item} = props
  const {name, imageUrl, description} = item

  return (
    <li className="container">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default Card
