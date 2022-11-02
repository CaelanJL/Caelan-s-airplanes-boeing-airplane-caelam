import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home';
import InputForm from './pages/Input';
import SearchForm from './pages/Search';


function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path = 'Input' element = {<InputForm />} />
            <Route path = 'Search' element = {<SearchForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

