import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import Item from './components/Item';
import About from './components/About';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list/*' element={<List />} />
      <Route path='/item/:itemId' element={<Item />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default Router;
