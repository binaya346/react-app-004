import "./index.css"
import Header from "./components/layouts/header"
import Wine from "./components/partials/wine"
import Coffee from "./components/partials/coffee"
// import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <main>
        <Coffee />
      </main>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
    </>
  )
}

export default App
