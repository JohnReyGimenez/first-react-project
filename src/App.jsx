import { useEffect, useState } from 'react'

const Card = ({ title }) => {
  const [count, setcount] = useState(0)
  const [hasLiked, sethasLiked] = useState(false)

  useEffect(()=> {
    console.log(`${title} has been linked to ${hasLiked}`)
  });

  return (
    <div className="card" onClick={()=> setcount(count + 1)}>
      <h2>{title} - {count}</h2>

      <button onClick={() => sethasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars"/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
    </div>
  )
}

export default App
