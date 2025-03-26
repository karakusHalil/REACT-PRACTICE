import Navbar from "./components/Navbar/Navbar"
import SiteRoutes from "./components/SiteRoutes"

function App() {

  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="row">
          <SiteRoutes/>
        </div>
      </div>
    </>
  )
}

export default App
