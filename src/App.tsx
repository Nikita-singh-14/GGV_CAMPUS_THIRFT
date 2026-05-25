
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import StorePage from './pages/StorePage';
import SellPage from './pages/SellPage';
import ItemDetailPage from './pages/ItemDetailPage';
import LandingPage from './pages/LandingPage';
import SellForm2 from './components/SellForm2';

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
    </Routes>
    </BrowserRouter>
  )
}

export default App;
