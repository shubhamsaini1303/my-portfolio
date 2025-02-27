import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Website/Navabar'

const MainWeb = () => {
  return (
    <div className='overflow-hidden bg-black'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainWeb