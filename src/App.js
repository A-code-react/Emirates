import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Book from './Pages/Book';
import Experience from './Pages/Experience'
import Where_we_fly from './Pages/Where_we_fly';
import Manage from './Pages/Manage';
import Pagenotfound from './Pages/Pagenotfound'

import Search from './Pages/Search';
function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     
<Routes>
<Route path='/' element={<Book/>}/>
<Route path='/Experience' element={<Experience/>}/>
<Route path='/Where_we_fly' element={<Where_we_fly/>}/>
<Route path='/Manage' element={<Manage/>}/>
<Route path='/Search' element={<Search/>}/>

<Route path='/*' element={<Pagenotfound/>}/>
</Routes>


     </BrowserRouter>
    </div>
  );
}

export default App;
