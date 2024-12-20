import Header from "./components/common/Header"
import SideBar from "./components/common/SideBar"
import LandingScreen from "./screens/homeSceen/LandingScreen"
 import './App.css'
const App = () => {

  return (
    <div>
      <div><Header /></div>
      <div>
        <div>
          <SideBar />
        </div>
        <div>
         <LandingScreen />
        </div>
      </div>
    </div>
  )
}

export default App
