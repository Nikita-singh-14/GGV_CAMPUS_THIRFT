
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import StorePage from './pages/StorePage';
import SellPage from './pages/SellPage';
import ItemDetailPage from './pages/ItemDetailPage';
import LandingPage from './pages/LandingPage';
import SellForm2 from './components/SellForm2';
import AdminPage from './pages/AdminPage';
import Login from './components/Login';
import Signup from './components/Signup';
import SellForm from './components/SellForm';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/add-to-cart' element={<CartPage/>}/>
      <Route path='/store' element={<StorePage/>}/>
      <Route path='/sell' element={<SellPage/>}/>
      <Route path='/item-detail/:id' element={<ItemDetailPage/>}/>
      <Route path='/sell-form-2' element={<SellForm2/>}/>
      <Route path='/sell-form' element={<SellForm/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
