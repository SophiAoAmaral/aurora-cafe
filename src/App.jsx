import { Header } from "./Components/Header/Header";
import { Content } from "./Pages/Content";
import { Route, Routes } from "react-router";
import { Reservar } from "./Pages/Reservar/Reservar";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>

    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Content />
          </>
        }
      />

      <Route path="/reservar" element={<Reservar />} />
    </Routes>


    </>
  );
}

export default App;
