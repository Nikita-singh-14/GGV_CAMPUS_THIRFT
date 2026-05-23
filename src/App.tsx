
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import StorePage from './pages/StorePage';
import SellPage from './pages/SellPage';
import ItemDetailPage from './pages/ItemDetailPage';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/store' element={<StorePage/>}/>
      <Route path='/sell' element={<SellPage/>}/>
      <Route path='/item-detail/:id' element={<ItemDetailPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
