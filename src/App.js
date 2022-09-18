
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import DrawerAppBar from './components/navbar/Navbar'
import List from './components/supplierslist/List';
import Add from './components/addsupplier/AddItem';
import Details from './components/supplierslist/Details';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DrawerAppBar/>}>
        <Route index path='/' element={<HomePage/>}/>
        <Route index path='Home' element={<HomePage/>}/>
        <Route path='/Suppliers' element={<List/>}/>
        <Route path='Suppliers/:id' element={<Details/>}/>
        <Route index path='Add' element={<Add/>}/>
      </Route>
    </Routes>
  );
}

export default App;
