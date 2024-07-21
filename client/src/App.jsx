import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import List from './components/list-items/List'
function App() {

  return (
    <>
    <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/catalog' element={<Catalog></Catalog>}></Route>
        <Route path='/listItem' element={<List></List>}></Route>
        {/* <Route path='/search' element={<Home></Home>}></Route>
        <Route path='/profile' element={<Home></Home>}></Route>
        <Route path='/register' element={<Home></Home>}></Route>
        <Route path='/login' element={<Home></Home>}></Route>
        <Route path='/logout' element={<Home></Home>}></Route> */}
      </Routes>

    <Footer></Footer>
    </>
  )
}

export default App
