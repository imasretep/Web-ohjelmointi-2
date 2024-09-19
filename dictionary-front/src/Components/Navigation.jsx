import { Link } from "react-router-dom"

const Navigation = () => {
  const navStyle = {
    paddingRight: 5,
  }
  return (
    <div>
      <Link style={navStyle} to="/add">Add Words</Link>
      <Link style={navStyle} to="/">Search Words</Link>
    </div>
  )
}

export default Navigation
