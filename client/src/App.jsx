import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './components/home/Home'
function App() {

  return (
    <>
    <Header></Header>

    <main>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </main>

    <Footer></Footer>
    </>
  )
}

export default App
