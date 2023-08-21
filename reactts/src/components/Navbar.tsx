import '../App.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='All'>All</Link>
        <Link to="/?todos=active" className='Active'>Active</Link>
        <Link to="/?todos=completed" className='Completed'>Completed</Link>
    </nav>
  )
}

export default Navbar
