import { Header } from "./Components/Header/Header"
import { Carrosel } from "./Components/Carrousel/Carrosel"
import { Route, Routes } from "react-router"
import { Home } from "./Components/Home/Home"


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Home/>}/>
          <Route path="/cardapio" element={<Home/>}/>
          <Route path="/ambiente" element={<Home/>}/>
          <Route path="/visite" element={<Home/>}/>
          <Route path="/reserva" element={<Home/>}/>
        </Routes>
        
     </>
  )
}

export default App
