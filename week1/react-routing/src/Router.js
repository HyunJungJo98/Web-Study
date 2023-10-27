import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import List from './List';
import Item from './Item';
import About from './About';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list' element={<List />}>
        <Route path=':itemId' element={<Item />} />
      </Route>
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default Router;
