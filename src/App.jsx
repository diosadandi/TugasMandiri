import { HashRouter, Route, Routes } from "react-router-dom"
// import OutletPage from "./outlets/OutletPage"
import OutletPage from "./outlet/OutletPage"


import Tugas2 from "./Page/Tugas2"
import Tugas3 from "./Page/Tugas3"
import Tugas4 from "./Page/Tugas4"


function App() {


  return (

      <HashRouter>

        <Routes>
          <Route path="/" element={<OutletPage />}>
            <Route index={true} element={<Tugas2 />} />            
          </Route>
        </Routes>

        <Routes>
          <Route path="/Tugas3" element={<OutletPage />}>
            <Route index={true} element={<Tugas3 />} />            
          </Route>
        </Routes>

        <Routes>
          <Route path="/Tugas4" element={<OutletPage />}>
            <Route index={true} element={<Tugas4 />} />            
          </Route>
        </Routes>


      </HashRouter>

  )
}

export default App
