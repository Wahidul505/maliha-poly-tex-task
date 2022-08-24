import { Route, Routes } from 'react-router-dom';
import ItemInfo from './Pages/ItemInfo';
import ItemInfoCreate from './Pages/ItemInfoCreate';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='lg:px-28 md:px-12 px-5'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemInfo/>} />
        <Route path='/create' element={<ItemInfoCreate/>} />
      </Routes>
    </div>
  );
}

export default App;
