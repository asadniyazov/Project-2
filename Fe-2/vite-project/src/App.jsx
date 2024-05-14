
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Add from './pages/Add'
import Adminpanel from './pages/Adminpanel'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Update from './pages/Update'
import Wishlist from './pages/Wishlist'
import Navbarlayout from "./Layout/Navbarlayout";
import Basket from "./pages/Basket";
import Mainprovider from "./Context/Mainprovider";

function App() {
  

  return (
    <>
    <Mainprovider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbarlayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="detail" element={<Detail />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="add" element={<Add />} />
          <Route path="adminpanel" element={<Adminpanel />} />
          <Route path="detail/:Detailid" element={<Detail />} />
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Mainprovider>
    </>
  )
}

export default App
