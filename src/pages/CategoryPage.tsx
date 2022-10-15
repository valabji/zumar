import { useParams } from 'react-router-dom'

export default function () {
  const { id } = useParams()

  return (
    <div className="container">
      <h1>Category Page</h1>
      <p>ID: {id}</p>
    </div>
  )
}
