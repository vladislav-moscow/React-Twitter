import {
  Routes,
  Route
} from "react-router-dom";
import Sign from './pages/Sign';
import Home from './pages/Home'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sign/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  )
  
}

export default MainRoutes;
