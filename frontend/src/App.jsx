
import Start from  './Pages/Start'
import { Routes,Route } from 'react-router-dom'
import Upload from './Pages/Upload'
import Download from './Pages/Download'
//import bg from './Assets/main.jpg';
import './index.css';
const App = () => {
 
  return (
    <div id="root" className = "App">
      <div style={{
  width: "100vw",
  height: "100vh",
  //backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  
}}>
<Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/Upload' element={<Upload />}/>
        <Route path='/Download' element={<Download/>}/>
      </Routes>
      </div>
      
      
      
    </div>
  )
}

export default App
