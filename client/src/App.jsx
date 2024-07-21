import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import List from './components/list-items/List'
import Search from './components/search/Search'
import Profile from './components/profile/Profile'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Details from './components/item-details/Details'
import Edit from './components/edit-item/Edit'
function App() {

  return (
    <>
    <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/catalog' element={<Catalog></Catalog>}></Route>
        <Route path='/catalog/details' element={<Details></Details>}></Route>
        <Route path='/catalog/edit' element={<Edit></Edit>}></Route>
        
        <Route path='/listItem' element={<List></List>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<Home></Home>}></Route>
      </Routes>

    <Footer></Footer>
    </>
  )
}

export default App
